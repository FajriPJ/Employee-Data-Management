import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { GetDispatchEmployees } from "../store/actions/EmployeeActions";
import PersonnelCard from "./PersonnelCard";
import Loading from "./Loading"
import PaginationComp from "./PaginationComp";
import MobilePersonnelCard from "./mobile/MobilePersonnelCard";

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
}));

export default function PersonnelList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.employeeReducer);
  
  const pages = [4]
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(4)

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1450;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
     
    return () => window.removeEventListener("resize", handleWindowResize);
  },[]);

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
      {width > breakPoint ? (
        <Grid container spacing={3}>
          {employees
            ?.slice(page  * rowsPerPage - rowsPerPage, page * rowsPerPage + rowsPerPage - rowsPerPage)
            ?.map((employee, index) => {
              console.log(employees?.length, 'length', index)
              return (
                <PersonnelCard {...employee} key={index} />
              );
          })}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {employees
            ?.slice(page  * rowsPerPage - rowsPerPage, page * rowsPerPage + rowsPerPage - rowsPerPage)
            ?.map((employee, index) => {
              return (
                <MobilePersonnelCard {...employee} key={index}/>
              );
          })}
        </Grid>
      )}

      <PaginationComp
        // showPerPage={showPerPage}
        // onPaginationChange={onPaginationChange}
        // total={employees.length}
        // setPagination={setPagination.start}
        page={page}
        employees={employees}
        pages={pages}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}
