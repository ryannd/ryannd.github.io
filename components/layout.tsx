import { ReactNode, useState } from "react";
import Menu from "./menu/menu";
import MobileMenu from "./menu/mobile_menu";


export default function Layout({ children }: { children?: ReactNode }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const onMenuClick = () => {
      setMenuOpen(!isMenuOpen);
    }

    return <>
      <main className="p-10 w-screen h-screen">
        <div className="lg:grid lg:grid-cols-3 h-full gap-8">
          <div className="w-full flex flex-col gap-16">
            <Menu onMenuClick={onMenuClick} />
          </div>
          <div className="w-full col-span-2 pt-16 lg:p-0">
              {!isMenuOpen && children}
              {isMenuOpen && <MobileMenu />}
          </div>
        </div>
      </main>
    </>
}