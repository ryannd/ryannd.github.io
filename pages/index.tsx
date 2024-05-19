import Layout from "../components/layout";
import { textFont, titleFont } from "../globals/fonts";

export default function Home() {
  return (
    <Layout>
      <div className="w-full xl:w-5/6 h-full flex flex-col justify-center lg:items-start gap-3 lg:gap-6">
        <h1 className={`text-3xl lg:text-6xl text-left ${titleFont.className}`}>I&apos;m Ryan,</h1>
        <h1 className={`text-3xl lg:text-6xl text-left ${textFont.className}`}>a software engineer based in Houston, TX</h1>
        <h1 className={`mt-2 text-3xl lg:mt-6 lg:text-6xl text-left ${textFont.className}`}>currently building frontend at Paramount+</h1>
        <h1 className={`mt-2 text-3xl lg:mt-6 lg:text-6xl text-left ${textFont.className}`}>also a part time master&apos;s student at UT Austin</h1>
      </div>
    </Layout>
  );
}