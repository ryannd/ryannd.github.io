import * as React from "react"
import { aboutText } from '../../globals/data'

type Props = {
    backToMenu: () => void;
}

const About = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto mt-16 md:mt-0 pb-16">
            <h1 className="text text-green-500 text-4xl md:text-5xl xl:text-6xl text-left self-start mb-2 md:mb-10 sticky top-0 py-2"><span onClick={backToMenu}>{`<<< `}</span>ABOUT</h1>
            {aboutText.split('\n').map((line) => <><p className="text text-white text-[17px] md:text-xl xl:text-3xl uppercase">{line}</p><br/></>)}
        </div>
    )
}

export default About;