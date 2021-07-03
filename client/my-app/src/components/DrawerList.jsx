import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import TodayIcon from "@material-ui/icons/Today";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: lightGreen
  },
  typography: {
    margin: "auto",
    width: "50%",
    padding: "10px",
    color: "white"
  }
}));

const drawerWidth = 240;

export default function DrawerList() {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className={classes.toolbar} style={{ backgroundColor: "#3f51b5"}}> 
          <Typography variant="h4" color="primary" className={classes.typography}>
            Gadjian
          </Typography>
        </div>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon label="Active">
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Beranda" />
          </ListItem>
          <ListItem button label="Active">
            <ListItemIcon>
              <GroupIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Personnel List" />
          </ListItem>
          <ListItem button label="Active">
            <ListItemIcon>
              <TodayIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Daily Attendence" />
          </ListItem>
        </List>
      </div>
    </>
  );
}
