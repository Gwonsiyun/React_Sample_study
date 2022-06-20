import React,{useState} from "react";
import HomeLink from "../../common/HomeLink";

function HookUseState() {
    const [item,setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div>
            <HomeLink/>
            <h1>Hello {item}</h1>
            <h2>Start editing to see som magic happen!</h2>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
        </div>
    )
}
export default HookUseState;