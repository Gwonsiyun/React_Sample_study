import React from "react";
import { Link } from "react-router-dom";
import linkStyle from "../resources/css/Home.module.css";

function Home() {
  return (
    <div className={"link"}>
      <h1>리액트 연습</h1>

      <h3>useState</h3>
      <ul className={`${linkStyle.link2}`}>
        <li>
          <Link to={`/useState`}>useState</Link>
        </li>
        <li>
          <Link to={`/useInput`}>useInput</Link>
        </li>
        <li>
          <Link to={`/useTabs`}>useTabs</Link>
        </li>
      </ul>

      <h3>useEffect</h3>
      <ul className={`${linkStyle.link2}`}>
        <li>
          <Link to={`/HookUseEffect`}>useEffect</Link>
        </li>
        <li>
          <Link to={`/HookUseTitle`}>HookUseTitle</Link>
        </li>
        <li>
          <Link to={`/HookUseClick`}>HookUseClick</Link>
        </li>
        <li>
          <Link to={`/HookUseHover`}>HookUseHover</Link>
        </li>
        <li>
          <Link to={`/HookUseConfirm`}>HookUseConfirm</Link>
        </li>
        <li>
          <Link to={`/HookUsePreventLeave`}>HookUsePreventLeave</Link>
        </li>
        <li>
          <Link to={`/HookUseBeforeLeave`}>HookUseBeforeLeave</Link>
        </li>
        <li>
          <Link to={`/HookUseFadeIn`}>HookUseFadeIn</Link>
        </li>
      </ul>

      <div className={`${linkStyle.link2}`}>
        <Link to={`/useEffect`}>useEffect</Link>
      </div>
      <div className={`${linkStyle.link2}`}>
        <Link to={`/state`}>State</Link>
      </div>
      <hr />
      <div className={`${linkStyle.link2}`}>
        <Link to={`/ToDo`}>To Do</Link>
      </div>
      <div className={`${linkStyle.link2}`}>
        <Link to={`/Coin`}>Coin</Link>
      </div>
      <div className={`${linkStyle.link2}`}>
        <Link to={`/movies`}>movies</Link>
      </div>
    </div>
  );
}
export default Home;
