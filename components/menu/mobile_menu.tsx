import Links from "./links";

export default function MobileMenu() {
    return <>
        <div className="w-full flex flex-col gap-6 lg:hidden">
            <Links />
        </div>
    </>
}