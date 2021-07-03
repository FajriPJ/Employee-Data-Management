import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import mergeName from "../helpers/mergeName";
import { Typography } from "@material-ui/core";
import HeaderCard from "./HeaderCard";

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
  primary: {
    color: "#3f51b5"
  }
}));

export default function PersonnelCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3} >
      <Card >
        <HeaderCard
          {...props}
        />
        <Avatar
          alt="Remy Sharp"
          src={props.picture.large}
          className={classes.Photo}
        />
        <CardContent>
          <List className={classes.list}>
            <ListItem className={classes.list}>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="body2" className={classes.primary} >
                    Name
                  </Typography>
                }
                secondary={mergeName(
                  props.name.title,
                  props.name.first,
                  props.name.last
                )}
              />
            </ListItem>
            <ListItem className={classes.list}>
              <ListItemText 
                disableTypography
                primary={
                  <Typography type="body2" className={classes.primary} >
                    Phone Number
                  </Typography>
                }
                secondary={props.phone} />
            </ListItem>
            <ListItem className={classes.list}>
              <ListItemText
                // primary="Birthday"
                disableTypography
                primary={
                  <Typography type="body2" className={classes.primary} >
                    Birthday
                  </Typography>
                }
                secondary={props.dob.date.slice(0, 10)}
              />
            </ListItem>
            <ListItem className={classes.list}>
              <ListItemText 
                disableTypography
                primary={
                  <Typography type="body2" className={classes.primary} >
                    Email
                  </Typography>
                } 
                secondary={props.email} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}
