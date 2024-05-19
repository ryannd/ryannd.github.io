import Link from "next/link";
import { titleFont, textFont, logo } from "../globals/fonts";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu({ onMenuClick }: { onMenuClick: () => void}) {
    return <>
        <div className="hidden lg:block">
            <Link href="/">
                <h1 className={`${titleFont.className} text-3xl text-center lg:text-4xl lg:text-left`}>Ryan Dimaranan</h1>
                <p className={`${textFont.className} text-xl text-center lg:text-left`}>software engineer</p>
            </Link>
        </div>
        <div className="hidden lg:flex flex-col gap-2">
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>about</p>
            <Link href="/projects">
                <p className={`${textFont.className} text-4xl text-center lg:text-left`}>projects</p>
            </Link>
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>contact</p>
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>cv</p>
        </div>
        <div className="block lg:hidden flex justify-between">
            <Link href="/">
                <h1 className={`${logo.className} text-3xl text-center lg:text-5xl lg:text-left`}>RD</h1>
            </Link>
            <div className="text-3xl" onClick={onMenuClick}>
                <GiHamburgerMenu />
            </div>
        </div>
    </>
}