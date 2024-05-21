import MobileLinks from "./mobile_links";

export default function MobileMenu() {
    return <>
        <div className="w-full flex flex-col gap-6 lg:hidden">
            <MobileLinks />
        </div>
    </>
}