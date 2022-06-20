import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/Home";
import ToDo from "./routes/ToDo";
import Coin from "./routes/Coin";
import Movies from "./routes/Movies";
import MovieDetail from "./routes/MovieDetail";
import HookUseState from "./routes/Hooks/useState/HookUseState";
import HookUseInput from "./routes/Hooks/useState/HookUseInput";
import HookUseTabs from "./routes/Hooks/useState/HookUseTabs";
import HookUseEffect from "./routes/Hooks/useEffect/HookUseEffect";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/useState"} element={<HookUseState/>}/>
                <Route path={"/useInput"} element={<HookUseInput/>}/>
                <Route path={"/useTabs"} element={<HookUseTabs/>}/>
                <Route path={"/HookUseEffect"} element={<HookUseEffect/>}/>
                <Route path={"/ToDo"} element={<ToDo/>}/>
                <Route path={"/Coin"} element={<Coin/>}/>
                <Route path={"/Movies"} element={<Movies/>}/>
                <Route path={"/MovieDetail/:id"} element={<MovieDetail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
