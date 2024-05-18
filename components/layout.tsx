import { ReactNode } from "react";
import { textFont, titleFont } from "../globals/fonts";

export default function Layout({ children }: { children?: ReactNode }) {
    return <>
    <main className="p-10 w-screen h-screen">
      <div className="lg:grid lg:grid-cols-3 h-full">
        <div className="w-full flex flex-col gap-16">
          <div>
            <h1 className={`${titleFont.className} text-3xl text-center lg:text-5xl lg:text-left`}>Ryan Dimaranan</h1>
            <p className={`${textFont.className} text-xl text-center lg:text-left`}>software engineer</p>
          </div>
          <div className="">
            <p className={`${textFont.className} text-xl text-center lg:text-left`}>about</p>
            <p className={`${textFont.className} text-xl text-center lg:text-left`}>projects</p>
            <p className={`${textFont.className} text-xl text-center lg:text-left`}>contact</p>
            <p className={`${textFont.className} text-xl text-center lg:text-left`}>cv</p>
          </div>
        </div>
        <div className="w-full col-span-2">
            {children}
        </div>
      </div>
    </main>
    </>
}