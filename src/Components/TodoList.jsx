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
  main: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "#062845",
      height: "100vh",
      display: "flex",
    },

    [theme.breakpoints.up("md")]: {
      backgroundColor: "#062845",
      height: "100vh",
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#062845",
      height: "100vh",
      display: "flex",
    },
  },
  main_card: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      color: "white",
      width: "80%",
      margin: "20% 0% 10% 0%",
      marginLeft: "32px",
      textAlign: "center",
      height: "30%",
    },

    [theme.breakpoints.up("md")]: {
      justifyContent: "space-evenly",
      display: "flex",
      borderRadius: "10px",
      margin: "10% 0% 10% 0%",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-evenly",
      display: "flex",
      borderRadius: "10px",
      margin: "10% 0% 10% 0%",
    },
  },

  heading: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "bold",
      color: "brown",
    },

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      color: "brown",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      color: "brown",
    },
  },
  textfield: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      margin: "3px",
    },

    [theme.breakpoints.up("md")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10px",
    },
  },
  btn: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      margin: "3px",
      color: "green",
    },

    [theme.breakpoints.up("md")]: {
      margin: "5px",
      color: "green",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "5px",
      color: "green",
    },
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
    <div className={classes.main}>
      <Grid container item>
        <Grid item lg={4} md={4} sm={2}></Grid>
        <Grid item lg={4} md={4} sm={8} className={classes.main_card}>
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
        <Grid item lg={4} md={4} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default TodoList;
