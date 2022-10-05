import {useState} from "react";

import prodoctorov from './img/prodoctorov.png'

import ParsersList from "./ParsersList";
import Prodoctorov from "./Prodoctorov";

const parsers = [
    {
        name: 'Prodoctorov',
        preview: prodoctorov,
        Component: Prodoctorov
    }
]

const Parsers = () => {
    const [currentParser, setCurrentParser] = useState(false)

    if(currentParser !== false) {
        const {Component} = parsers[currentParser]
        return <Component selectParser={setCurrentParser} />
    }

    return (
        <div className="page">
            <ParsersList items={parsers} selectParser={setCurrentParser} />
        </div>
    )
}

export default Parsers