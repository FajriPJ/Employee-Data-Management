import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import randomColor from "../helpers/randomColor";
import { Typography } from "@material-ui/core";

export default function HeaderCard(props) {

  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label="recipe"
          style={{
            backgroundColor: randomColor(),
          }}
        >
          {props.name.first[0]}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Personnel ID"
      disableTypography
      subheader={
        <Typography type="body2" style={{ color: "#3f51b5" }}>
          {props.id.value || "N/A"}
        </Typography>
      }
    />
  );
}
