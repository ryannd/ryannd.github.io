import { titleFont } from "../../globals/fonts";

export default function StackBadge({text}: {text: string}) {
    return <span className={`${titleFont.className} bg-gray-100 text-gray-800 text-sm px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500`}>{text}</span>
}