import {useEffect, useState} from "react";
import HomeLink from "../../common/HomeLink";

function HookUseEffect(){
    const first = () => {
        console.log("first");
    }
    const sayHello = () => {
        console.log("hello");
    }
    const numberHello = () => {
        console.log("numberHello");
    }
    const aNumberHello = () => {
        console.log("ANumberHello");
    }

    const [number,setNumber] = useState(0);
    const [aNumber,setAnumber] = useState(0);
    useEffect(first,[])
    useEffect(sayHello,[number,aNumber]);
    useEffect(numberHello,[number]);
    useEffect(aNumberHello,[aNumber]);
    return(
        <>
            <HomeLink/>
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </>
    )
}
export default HookUseEffect;