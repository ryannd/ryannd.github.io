import Layout from "../components/layout";
import { textFont, titleFont } from "../globals/fonts";

export default function Home() {
  return (
    <Layout>
      <div className="w-2/3 h-full flex flex-col justify-center items-start gap-6">
        <h1 className={`text-6xl text-left ${titleFont.className}`}>i&apos;m Ryan,</h1>
        <h1 className={`text-6xl text-left ${textFont.className}`}>a software engineer based in Houston, TX</h1>
        <h1 className={`mt-6 text-6xl text-left ${textFont.className}`}>currently building frontend at Paramount+</h1>
        <h1 className={`mt-6 text-6xl text-left ${textFont.className}`}>also a part time master&apos;s student at UT Austin</h1>
      </div>
    </Layout>
  );
}