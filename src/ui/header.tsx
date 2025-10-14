import {Arrow} from "@/ui/arrow";
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-8 px-8 md:px-16 md:py-16 bg-[#010009] text-white">
            <div className="flex justify-between flex-col items-center md:flex-row md:gap-6">
                <div>
                    <h1 className="font-bold text-lg md:text-2xl">Oxaley</h1>
                </div>
                <div className="flex gap-20 flex-col items-center md:flex-row">
                    <ul className="flex flex-row items-center whitespace-nowrap">
                        <li>About Us,</li>
                        <li>Services,</li>
                        <li>Project,</li>
                        <li>FAQ</li>
                    </ul>
                    <div className="flex flex-row gap-2 items-center">
                        <Link href="#" className="uppercase whitespace-nowrap">Contact Us</Link>
                        <Arrow className="rotate-180"/>
                    </div>
                </div>
            </div>
        </header>
    )
}