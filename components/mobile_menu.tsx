import Link from "next/link";
import { textFont } from "../globals/fonts";

export default function MobileMenu() {
    return <>
        <div className="w-full flex flex-col gap-6">
        <p className={`${textFont.className} text-4xl text-center lg:text-left`}>about</p>
        <Link href="/projects">
            <p className={`${textFont.className} text-4xl text-center lg:text-left`}>projects</p>
        </Link>
        <p className={`${textFont.className} text-4xl text-center lg:text-left`}>contact</p>
        <p className={`${textFont.className} text-4xl text-center lg:text-left`}>cv</p>
        </div>
    </>
}