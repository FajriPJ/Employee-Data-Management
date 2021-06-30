import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { GetDispatchEmployees } from "../store/actions/EmployeeActions";
import Pagination from "@material-ui/lab/Pagination";
import PersonnelCard from "./PersonnelCard";
import Loading from "./Loading"
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    margin: "auto",
    width: "50%",
    paddingTop: "56.25%", // 16:9
    borderRadius: "50%",
  },
  Photo: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
  },
  list: {
    padding: "0px 10px 0px 10px",
  },
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PersonnelList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.employeeReducer);

  const pages = [4]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])

  useEffect(() => {
    dispatch(GetDispatchEmployees());
  }, []);

  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }

  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {employees
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          ?.map((employee, index) => {
            return (
              <PersonnelCard {...employee} key={index}/>
            );
        })}
      </Grid>
      <Pagination className={classes.pagination} 
        color="primary" 
        component="div"
        page= {page}
        count={employees.length/pages-1}
        onChange={handleChangePage}
        />
    </div>
  );
}
