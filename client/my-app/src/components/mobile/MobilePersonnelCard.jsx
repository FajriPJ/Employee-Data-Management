import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import mergeName from "../../helpers/mergeName";
import { Typography } from "@material-ui/core";
import HeaderCard from "../HeaderCard";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    margin: "auto",
    width: "50%",
    borderRadius: "50%",
  },
  list: {
    paddingLeft: "8px",
  },
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  Photo: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    marginTop: "30%",
    marginLeft: 10
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    padding: '0px',
    margin: '0px'
  },
  primary: {
    color: "#3f51b5"
  }
}));
export default function MobilePersonnelCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3}>
      <Card >
        <HeaderCard {...props}/>
        <Grid container spacing={3} style={{display: "flex", justifyContent: "center"}}>
          <Grid item xs={4} style={{paddingTop: '0px'}}>
            <Avatar
              alt="Remy Sharp"
              src={props.picture.large}
              className={classes.Photo}
            />
          </Grid>
          <Grid item xs={8}  style={{paddingTop: '0px'}}>
            <CardContent>
              <List className={classes.list}>
                <ListItem style={{padding: '0px'}}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography type="body2" className={classes.primary}>
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
                <ListItem style={{padding: '0px'}}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography type="body2" className={classes.primary}>
                        Phone
                      </Typography>
                    }
                    secondary={props.phone}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
