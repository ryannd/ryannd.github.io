import Layout from "../components/layout";
import { textFont, titleFont } from "../globals/fonts";
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

  const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
  }

  return (
    <Layout>
      <motion.div variants={container} initial="hidden" animate="show" className="w-full xl:w-5/6 h-full flex flex-col justify-center lg:items-start gap-3 lg:gap-6">
        <motion.h1 variants={item} className={`text-3xl lg:text-6xl text-left ${titleFont.className}`}>I&apos;m Ryan,</motion.h1>
        <motion.h1 variants={item} className={`text-3xl lg:text-6xl text-left ${textFont.className}`}>a software engineer based in Houston, TX</motion.h1>
        <motion.h1 variants={item} className={`mt-2 text-3xl lg:mt-6 lg:text-6xl text-left ${textFont.className}`}>currently building frontend at Paramount+</motion.h1>
        <motion.h1 variants={item} className={`mt-2 text-3xl lg:mt-6 lg:text-6xl text-left ${textFont.className}`}>also a part time master&apos;s student at UT Austin</motion.h1>
      </motion.div>
    </Layout>
  );
}