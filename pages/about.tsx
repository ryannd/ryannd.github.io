import Image from "next/image";
import Layout from "../components/layout";
import { textFont, titleFont } from "../globals/fonts";
import AboutData from '../data/about.json'
import { useAnimate, stagger, useTransform, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
    const [scope, animate] = useAnimate();
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const headline = useTransform(rounded , (latest) => AboutData.data.headline.slice(0,latest))

    useEffect(() => {
       const animation = async () => {
            await animate(count, AboutData.data.headline.length, {
                type: "tween",
                duration: 1,
                ease: "easeInOut",
            });
            await animate("p", { opacity: 1}, { duration: .1, delay: stagger(0.2, {startDelay: .5}) })
            animate("img", { opacity: 1 }, { duration: .5 } )
       }    

       animation()
    }, [])

    return <Layout>
        <div className="lg:p-10 mb-10 lg:mb-0 w-full" ref={scope}>
            <Image 
                priority 
                src="/images/profile.JPEG"
                alt="My profile picture"
                width={800}
                height={800}
                className="transition ease-in-out duration-200 object-cover aspect-square lg:w-3/5 grayscale hover:grayscale-0 opacity-0"
            />
            <motion.h1 className={`${titleFont.className} lg:leading-snug text-3xl lg:text-6xl mt-8 lg:w-1/2`}>{headline}</motion.h1>
            <div className="flex flex-col gap-4 mt-8 lg:w-5/6">
                {
                    AboutData.data.sentences.map((sentence, i) => {
                        return <p className={`${textFont.className} text-xl opacity-0`} key={i}>{sentence}</p>
                    })
                }
            </div>
        </div>
    </Layout>
}