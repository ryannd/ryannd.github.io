import * as React from "react"

type Props = {
    title: string;
    backToMenu: () => void;
}

const PageTitle = ({title, backToMenu}: Props) => {
    return <h1 className="text text-green-500 text-4xl md:text-5xl xl:text-6xl text-left self-start mb-2 md:mb-10 sticky top-0 py-2 md:py-0"><span onClick={backToMenu}>{`<<< `}</span>{title}</h1>
}

export default PageTitle;