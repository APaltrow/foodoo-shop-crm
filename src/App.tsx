import { Routes, Route } from "react-router-dom";

import style from "./App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <h1> FooDoo CRM</h1>
      {/* <Routes>
            <Route index element={<Component />} />
            <Route path="" element={<Component />}>              
            <Route path="" element={<Component />} />              
          </Routes>*/}
    </div>
  );
}

export default App;
