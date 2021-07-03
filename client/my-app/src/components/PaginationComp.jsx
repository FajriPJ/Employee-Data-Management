import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationComp(props) {
  const classes = useStyles();

  return (
    <Pagination className={classes.pagination} 
      color="primary" 
      component="div"
      page= {props.page}
      count={props.employees?.length/props.pages}
      onChange={props.handleChangePage}
    />
  )
}
