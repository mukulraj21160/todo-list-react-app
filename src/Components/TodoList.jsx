import React, { useState } from "react";
import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import AllLists from "./AllLists";

const style = makeStyles((theme) => ({
  main_card: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-evenly",
    paddingBottom: "10px",
    marginTop: "40%",
    [theme.breakpoints.up("md")]: {
      marginTop: "15%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "15%",
    },
  },

  heading: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2d4059",
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
    },
  },
  textfield: {
    paddingLeft: "10px",
  },
  btn: {
    color: "green",
  },
}));

const TodoList = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  const addItems = () => {
    setItems((prevData) => {
      return [...prevData, item];
    });
    setItem("");
  };

  const classes = style();
  return (
    <div>
      <Grid container item>
        <Grid item lg={4} md={3} xs={1}></Grid>
        <Grid item lg={4} md={6} xs={10} className={classes.main_card}>
          <Card>
            <Typography className={classes.heading}>Todo List</Typography>
            <div className={classes.textfield}>
              <TextField
                label="add items"
                onChange={handleItemChange}
                value={item}
              ></TextField>
              <IconButton className={classes.btn}>
                <AddBoxRoundedIcon onClick={addItems} />
              </IconButton>
            </div>
            <br />
            {items.map((value, index) => {
              return <AllLists key={index} text={value} />;
            })}
          </Card>
        </Grid>
        <Grid item lg={4} md={3} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default TodoList;
