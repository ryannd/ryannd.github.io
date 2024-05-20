import Link from 'next/link'
import MenuData from '../../data/menu.json'
import { textFont } from '../../globals/fonts'

export default function Links() {
    return MenuData.items.map((item) => {
        return <Link href={item.path} key={item.title}>
                <p className={`${textFont.className} text-4xl text-center lg:text-left`}>{item.title}</p>
            </Link>
    })
}