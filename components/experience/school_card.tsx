import { subtitleFont, textFont, titleFont } from "../../globals/fonts";

interface School {
    school: string;
    years: string;
    degree: string;
    honors: string[];
    courses: string[];
}

export default function SchoolCard({ school } : { school: School }) {
    return <>
         <div>
            <p className={`${textFont.className}`}>{school.years}</p>
        </div>
        <div className="col-span-4 lg:col-span-3">
            <h1 className={`${titleFont.className} text-2xl`}>{school.school}</h1>
            <h1 className={`${subtitleFont.className} text-xl`}>{school.degree}</h1>
            {
                school.honors.map((title) => {
                    return <p className={`${textFont.className}`} key={title}>{title}</p>
                })
            }
            <p className={`${titleFont.className} text-xl mt-4`}>Relevant Coursework</p>
            {
                school.courses.map((course) => {
                    return <p className={`${textFont.className}`} key={course}>- {course}</p>
                })
            }
        </div>
        <div className="hidden lg:block"></div>
    </>
}