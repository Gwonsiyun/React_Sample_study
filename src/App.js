import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ToDo from "./routes/ToDo";
import Coin from "./routes/Coin";
import Movies from "./routes/Movies";
import MovieDetail from "./routes/MovieDetail";
import HookUseState from "./routes/Hooks/useState/HookUseState";
import HookUseInput from "./routes/Hooks/useState/HookUseInput";
import HookUseTabs from "./routes/Hooks/useState/HookUseTabs";
import HookUseEffect from "./routes/Hooks/useEffect/HookUseEffect";
import HookUseTitle from "./routes/Hooks/useEffect/HookUseTitle";
import HookUseClick from "./routes/Hooks/useEffect/HookUseClick";
import HookUseHover from "./routes/Hooks/useEffect/HookUseHover";
import HookUseConfirm from "./routes/Hooks/not use/useConfirm";
import HomeLink from "./routes/common/HomeLink";
import HookUsePreventLeave from "./routes/Hooks/not use/usePreventLeave";
import HookUseBeforeLeave from "./routes/Hooks/useEffect/HookUseBeforeLeave";
import HookUseFadeIn from "./routes/Hooks/useEffect/HookUseFadeIn";
import Counters from "./routes/counter/Counters";
import HookUseRef from "./routes/Hooks/useEffect/HookUseRef";
import HookUseNetwork from "./routes/Hooks/useEffect/HookUseNetwork";
import RGBCode from "./routes/rgbCode/RGBCode";

function App() {
  return (
    <Router>
      <HomeLink />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/useState"} element={<HookUseState />} />
        <Route path={"/useInput"} element={<HookUseInput />} />
        <Route path={"/useTabs"} element={<HookUseTabs />} />
        <Route path={"/HookUseEffect"} element={<HookUseEffect />} />
        <Route path={"/HookUseTitle"} element={<HookUseTitle />} />
        <Route path={"/HookUseClick"} element={<HookUseClick />} />
        <Route path={"/HookUseHover"} element={<HookUseHover />} />
        <Route path={"/HookUseConfirm"} element={<HookUseConfirm />} />
        <Route
          path={"/HookUsePreventLeave"}
          element={<HookUsePreventLeave />}
        />
        <Route path={"/HookUseBeforeLeave"} element={<HookUseBeforeLeave />} />
        <Route path={"/HookUseFadeIn"} element={<HookUseFadeIn />} />
        <Route path={"/HookUseNetwork"} element={<HookUseNetwork />} />
        <Route path={"/HookUseRef"} element={<HookUseRef />} />
        <Route path={"/ToDo"} element={<ToDo />} />
        <Route path={"/Coin"} element={<Coin />} />
        <Route path={"/Movies"} element={<Movies />} />
        <Route path={"/MovieDetail/:id"} element={<MovieDetail />} />
        <Route path={"/Counters"} element={<Counters />} />
        <Route path={"/RGBCode"} element={<RGBCode />} />
      </Routes>
    </Router>
  );
}

export default App;
