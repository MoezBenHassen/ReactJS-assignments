import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import ClassComponent
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from "./Components/FunctionalComponent.jsx";
import useWindowWidth from "./CustomHooks/useWindowWidth.jsx";

import Events from "./Components/Events.jsx";
// import data from ;

function App() {
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0)
    const helloWorld = <h1>hello world {1+1}</h1>
    const tab = [{name: "TWIN3", module:"REACT"}, {name: "TWIN3", module:"NODE"}]

    const [{color, background}, setColor] = useState({color: "red", background: "blue"});
    const [state, setState] = useState();

    useEffect(() => {
        console.log("mouting");
    }, []);

    useEffect(() => {
        console.log("chaque rerender");
    });
    useEffect(() => {
        console.log("mounting & updating");
    }, [color]);
    const windowWidth = useWindowWidth();
    return (
        <>
            {helloWorld}
            <p style={{color: "red"}}>
                {tab.map((e, index) => {
                    return <li key={e.index}>{e.module}</li>
                })
                }
            </p>
            {/*count button using setCcount*/}
            <button onClick={() => setCount(count + 1)}>Click n° {count}</button>
            {/*count button using useState*/}
            <FunctionalComponent name={"MoezFunctionalComponent"}></FunctionalComponent>
            <ClassComponent name={"MoezClassComponent"}></ClassComponent>

            set text color : &nbsp;
            <input type="text"
                   onChange={(e) => setColor(c => ({...c, color: e.target.value}))}
            />
            <br/>
            set Background color : &nbsp;
            <input type="text"
                   onChange={(e) => setColor(b => ({...b, background: e.target.value}))}
            />

            <p style={{backgroundColor: background}}>
                <span style={{color: color}}>
                    The color is : {color}
                </span>
                &nbsp; & The background is : {background}
            </p>
            <p> width : {windowWidth.width } px x height:{windowWidth.height }</p>

            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*pass data as prop*/}

            <Events></Events>
        </>
    )
}

export default App
