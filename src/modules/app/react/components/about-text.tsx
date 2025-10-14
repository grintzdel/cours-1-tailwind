import Link from "next/link";
import {Arrow} from "@/ui/arrow";

export default function AboutText() {
    return (
        <div className="flex justify-between">
            <h1 className="uppercase">About Us</h1>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col text-[#848399]">
                    <span>We combine creativity and technology</span>
                    <span>to deliver results that not only meet</span>
                    <span>expectations, but exceed them.</span>
                </div>
                <Link href="#" className="uppercase flex gap-3 items-center">
                    Learn More
                    <Arrow className="rotate-180" />
                </Link>
            </div>
        </div>
    )
}