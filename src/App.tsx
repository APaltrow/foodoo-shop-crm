import { Routes, Route } from "react-router-dom";

import style from "./App.module.scss";

const App = () => {
  return (
    <div className={style.app}>
      <h1> FooDoo CRM</h1>
    </div>
  );
};

export default App;

{
  /* <Routes>
            <Route index element={<Component />} />
            <Route path="" element={<Component />}>              
            <Route path="" element={<Component />} />              
          </Routes>*/
}
