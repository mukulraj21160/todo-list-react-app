import React from "react";
import TodoList from "./Components/TodoList";
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  main: {
    //
  },
}));

const App = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <TodoList />
    </div>
  );
};

export default App;
