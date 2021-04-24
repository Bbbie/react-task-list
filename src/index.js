import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from "@components/Tasks";

import '@shared/global.scss';

const App = () => {
  return (
    <>
      <Tasks />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));