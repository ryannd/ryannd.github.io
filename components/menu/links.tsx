import Link from 'next/link'
import MenuData from '../../data/menu.json'
import { textFont } from '../../globals/fonts'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Links() {
    return <>
    {
        MenuData.items.map((item) => {
        return <Link href={item.path} key={item.title}>
                <p className={`${textFont.className} text-4xl text-center lg:text-left`}>{item.title}</p>
            </Link>
        })
    }
    <div className="flex text-3xl w-full gap-8 lg:gap-3 mt-6 justify-center lg:justify-start">
        <a href="https://github.com/ryannd" target='_blank'>
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ryan-dimaranan/" target='_blank'>
            <FaLinkedin />
        </a>
        <a href="mailto:ryan2dimaranan@gmail.com">
            <MdEmail />
        </a>
    </div>
    </>
}