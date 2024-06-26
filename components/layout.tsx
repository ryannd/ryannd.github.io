import { ReactNode, useEffect, useState } from "react";
import Menu from "./menu/menu";
import MobileMenu from "./menu/mobile_menu";
import { useRouter } from "next/router";
import Head from "next/head";
import MenuData from '../data/menu.json'
import { motion, stagger, useAnimate } from "framer-motion";

export default function Layout({ children }: { children?: ReactNode }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const seoData : {[key: string]: string;} = MenuData.seo;
    const onMenuClick = () => {
      setMenuOpen(!isMenuOpen);
    }

    return <>
      <Head>
        <title>{seoData[router.asPath]}</title>
        <meta property="og:title" content={seoData[router.asPath]} />
        <meta property="og:description" content="Portfolio of Software Engineer Ryan Dimaranan" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main className="p-10 w-screen h-screen lg:overflow-hidden">
        <div className="lg:grid lg:grid-cols-3 h-full gap-8">
          <div className="w-full flex flex-col gap-16 sticky">
            <Menu onMenuClick={onMenuClick} isOpen={isMenuOpen}/>
          </div>
          <div className="w-full col-span-2 pt-16 lg:p-0 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <motion.div
                className="h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {!isMenuOpen && children}
              </motion.div>
              {isMenuOpen && <MobileMenu />}
          </div>
        </div>
      </main>
    </>
}