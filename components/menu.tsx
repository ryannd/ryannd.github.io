import { titleFont, textFont, logo } from "../globals/fonts";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu() {
    return <>
        <div className="hidden lg:block">
            <h1 className={`${titleFont.className} text-3xl text-center lg:text-4xl lg:text-left`}>Ryan Dimaranan</h1>
            <p className={`${textFont.className} text-xl text-center lg:text-left`}>software engineer</p>
        </div>
        <div className="hidden lg:flex flex-col gap-2">
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>about</p>
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>projects</p>
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>contact</p>
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>cv</p>
        </div>
        <div className="block lg:hidden flex justify-between">
            <h1 className={`${logo.className} text-3xl text-center lg:text-5xl lg:text-left`}>RD</h1>
            <div className="text-3xl">
                <GiHamburgerMenu />
            </div>
        </div>
    </>
}