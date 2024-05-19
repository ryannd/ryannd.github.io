import { ReactNode } from "react";
import Menu from "./menu";

export default function Layout({ children }: { children?: ReactNode }) {
    return <>
    <main className="p-10 w-screen h-screen">
      <div className="lg:grid lg:grid-cols-3 h-full gap-8">
        <div className="w-full flex flex-col gap-16">
          <Menu />
        </div>
        <div className="w-full col-span-2 pt-16 lg:p-0">
            {children}
        </div>
      </div>
    </main>
    </>
}