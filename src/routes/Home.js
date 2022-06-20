import {Link} from "react-router-dom";
import linkStyle from "../resources/css/Home.module.css"
import HomeLink from "./common/HomeLink";

function Home(){

    return (
            <div className={"link"}>
                <HomeLink/>
                <h1>리액트 연습</h1>
                <div>
                    <h3>useState</h3>
                    <ul className={`${linkStyle.link2}`}>
                        <li>
                            <div><Link to={`/useState`}>useState</Link></div>
                        </li>
                        <li>
                            <div><Link to={`/useInput`}>useInput</Link></div>
                        </li>
                        <li>
                            <div><Link to={`/useTabs`}>useTabs</Link></div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>useEffect</h3>
                    <ul className={`${linkStyle.link2}`}>
                        <li><div><Link to={`/HookUseEffect`}>useEffect</Link></div></li>
                    </ul>
                </div>
                <div className={`${linkStyle.link2}`}><Link to={`/useEffect`}>useEffect</Link></div>
                <div className={`${linkStyle.link2}`}><Link to={`/state`}>State</Link></div>
                <hr/>
                <div className={`${linkStyle.link2}`}><Link to={`/ToDo`}>To Do</Link></div>
                <div className={`${linkStyle.link2}`}><Link to={`/Coin`}>Coin</Link></div>
                <div className={`${linkStyle.link2}`}><Link to={`/movies`}>movies</Link></div>
            </div>
    );
}
export default Home;