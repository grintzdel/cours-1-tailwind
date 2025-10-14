import {Arrow} from "@/ui/arrow";
import Link from "next/link";

export default function ProjectHead() {
    return (
        <div className="flex justify-between px-8 mb-2 md:px-16">
            <h1 className="uppercase">Best Project</h1>
            <Link href="#" className="uppercase flex gap-3 items-center">
                Learn More
                <Arrow className="rotate-130" />
            </Link>
        </div>
    )
}