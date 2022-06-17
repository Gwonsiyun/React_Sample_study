import {Link} from "react-router-dom";

function Home(){

    return (
            <div className={"link"}>
                <div><Link to={`/useState`}>useState</Link></div>
                <div><Link to={`/useEffect`}>useEffect</Link></div>
                <div><Link to={`/state`}>State</Link></div>
            </div>
    );
}
export default Home;