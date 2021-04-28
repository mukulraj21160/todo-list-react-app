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
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  main_card: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      textAlign: "center",
      justifyContent: "space-evenly",
      paddingBottom: "10px",
      marginTop: "40%",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      textAlign: "center",
      justifyContent: "space-evenly",
      paddingBottom: "10px",
      marginTop: "15%",
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
      textAlign: "center",
      justifyContent: "space-evenly",
      paddingBottom: "10px",
      marginTop: "15%",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      textAlign: "center",
      justifyContent: "space-evenly",
      paddingBottom: "10px",
      marginTop: "15%",
    },
  },

  heading: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#2d4059",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#2d4059",
    },

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      color: "#2d4059",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      color: "#2d4059",
    },
  },
  textfield: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "10px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10px",
    },
  },
  btn: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      color: "green",
    },
    [theme.breakpoints.up("sm")]: {
      color: "green",
    },

    [theme.breakpoints.up("md")]: {
      color: "green",
    },
    [theme.breakpoints.up("lg")]: {
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
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
        <Grid item lg={4} md={6} sm={8} xs={10} className={classes.main_card}>
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
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default TodoList;
