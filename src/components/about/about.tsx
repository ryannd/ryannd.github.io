import * as React from "react"
import { aboutText } from '../../globals/data'
import PageTitle from "../page_title";

type Props = {
    backToMenu: () => void;
}

const About = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto mt-16 md:mt-0 pb-16">
            <PageTitle title="ABOUT" backToMenu={backToMenu}/>
            {aboutText.split('\n').map((line) => <><p className="text text-white text-[17px] md:text-xl xl:text-3xl uppercase">{line}</p><br/></>)}
        </div>
    )
}

export default About;