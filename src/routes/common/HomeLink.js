import linkStyle from "../../resources/css/Home.module.css";
import { Link } from "react-router-dom";
import React from "react";

const HomeLink = () => {
  return (
    <>
      <div className={`${linkStyle.link1}`}>
        <Link to={`/`}>Home</Link>
      </div>
      <hr />
    </>
  );
};
export default HomeLink;
