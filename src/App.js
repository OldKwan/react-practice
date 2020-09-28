import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import One from './pages/com_one/One'
import Two from './pages/com_two/Two'



function App() {
  return (
    <div>
      <One />
      <hr />
      <Two />
    </div>
  );
}

export default App;
