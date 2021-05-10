import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import TodoList from "./Components/TodoList";
import Theme from "./Theme/Theme";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <TodoList />
      </ThemeProvider>
    </div>
  );
};

export default App;
