import * as React from "react"
import { links } from "../../globals/data";

type Props = {
    backToMenu: () => void;
}

const Contact = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto mt-16 md:mt-0 pb-16">
            <h1 className="text text-green-500 text-4xl md:text-5xl xl:text-6xl text-left self-start mb-2 md:mb-10 sticky top-0 py-2 md:py-0"><span onClick={backToMenu}>{`<<< `}</span>CONTACT</h1>
            <div className="mt-16">
                {
                    links.map((link) => {
                        return (
                            <a href={link.link} target="_blank"><h2 className="text text-white text-4xl md:text-5xl xl:text-6xl text-left mb-5 md:mb-8 xl:mb-10">{link.title} {">>>"}</h2></a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Contact;