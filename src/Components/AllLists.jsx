import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  list: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "left",
      padding: "0px 10px 0px 10px",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "left",
      padding: "0px 10px 0px 10px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "left",
      padding: "0px 10px 0px 10px",
    },
  },
  btn: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      color: "red",
      cursor: "pointer",
    },

    [theme.breakpoints.up("md")]: {
      color: "red",
      cursor: "pointer",
    },

    [theme.breakpoints.up("lg")]: {
      color: "red",
      cursor: "pointer",
    },
  },
}));

const AllLists = (props) => {
  const [del, setDel] = useState(false);

  const deleteItem = () => {
    setDel(true);
  };
  const classes = style();
  return (
    <div className={classes.list}>
      <Typography style={{ textDecoration: del ? "line-through" : "none" }}>
        <br />
        {props.text}
      </Typography>
      <span>
        <br />
        <DeleteIcon className={classes.btn} onClick={deleteItem} />
      </span>
    </div>
  );
};

export default AllLists;
