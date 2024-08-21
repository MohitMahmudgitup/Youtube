import React, { useState } from 'react';
import Navber from './Components/Navber/Navber';
import "./index.css";
import { Outlet } from 'react-router-dom';

function App() {
  const [siteber, setSiteber] = useState(true);

  return (
    <>
      <Navber setSiteber={setSiteber} />
      <Outlet context={ {siteber} } />
    </>
  );
}

export default App;
