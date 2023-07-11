import * as React from "react"
import { links } from "../../globals/data";
import PageTitle from "../page_title";

type Props = {
    backToMenu: () => void;
}

const Contact = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto mt-16 md:mt-0 pb-16">
            <PageTitle title="CONTACT" backToMenu={backToMenu}/>
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