import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./redux/store";
import TableContainer from "./ui/Table/TableContainer";
import { library} from '@fortawesome/fontawesome-svg-core';
import { faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
      <Provider store={store}>
        {/*<div className="App" style={{whiteSpace: "nowrap"}}>*/}
        <div className="App" >
          <TableContainer/>
        </div>
      </Provider>
  );
}
library.add(faSortDown, faSortUp);
export default App;
