import Image from "next/image";
import Layout from "../components/layout";
import { textFont, titleFont } from "../globals/fonts";
import AboutData from '../data/about.json'

export default function About() {
    return <Layout>
        <div className="lg:p-10 mb-10 lg:mb-0">
            <Image 
                src="/images/profile.JPEG"
                alt="My profile picture"
                width={800}
                height={800}
                className="transition ease-in-out duration-200 object-cover aspect-square lg:w-3/5 grayscale hover:grayscale-0"
            />
            <h1 className={`${titleFont.className} lg:leading-snug text-3xl lg:text-6xl mt-8 lg:w-1/2`}>{AboutData.data.headline}</h1>
            <div className="flex flex-col gap-4 mt-8 lg:w-5/6">
                {
                    AboutData.data.sentences.map((sentence, i) => {
                        return <p className={`${textFont.className} text-xl`} key={i}>{sentence}</p>
                    })
                }
            </div>
        </div>
    </Layout>
}