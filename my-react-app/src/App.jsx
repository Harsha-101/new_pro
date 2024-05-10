
// App.jsx

import React, { useState } from 'react';
import Card from './Card';
import Employees from './Employees';

const App=()=>{
  const [employee]=useState([
    {id:1,name:jasu,desg:student},
    {id:2,name:harsha,desg:student},
    {id:3,name:priya,desg:student}
  ])
  return(
    <>
    <Card />
    <Employees employee={employee} />
    </>
  );
};

export default App;
