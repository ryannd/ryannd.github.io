import Link from 'next/link'
import MenuData from '../../data/menu.json'
import { textFont } from '../../globals/fonts'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion} from "framer-motion";

export default function MobileLinks() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const motionItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return <motion.div variants={container} initial="hidden" animate="show">
        {
            MenuData.items.map((item) => {
            return <Link href={item.path} key={item.title}>
                    <motion.p variants={motionItem} className={`${textFont.className} text-4xl text-center lg:text-left`}>{item.title}</motion.p>
                </Link>
            })
        }
        <motion.div variants={motionItem} className="flex text-3xl w-full gap-8 lg:gap-3 mt-6 justify-center lg:justify-start">
            <a href="https://github.com/ryannd" target='_blank'>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ryan-dimaranan/" target='_blank'>
                <FaLinkedin />
            </a>
            <a href="mailto:ryan2dimaranan@gmail.com">
                <MdEmail />
            </a>
        </motion.div>
    </motion.div>
}