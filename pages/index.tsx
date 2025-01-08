import Layout from "../components/layout";
import { textFont, titleFont } from "../globals/fonts";
import { motion } from 'framer-motion';
import HomeData from '../data/home.json';

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
        <motion.h1 variants={item} className={`text-3xl lg:text-6xl text-left ${titleFont.className}`}>{HomeData.title}</motion.h1>
        <div className="flex flex-col gap-2">
          {
            HomeData.subtitles.map((string) => <motion.p key={string} variants={item} className={`text-3xl lg:text-4xl text-left ${textFont.className}`}>{string}</motion.p>)
          }
        </div>
      </motion.div>
    </Layout>
  );
}