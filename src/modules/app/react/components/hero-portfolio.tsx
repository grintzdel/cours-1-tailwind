import {Media, MediaGallery} from "@/ui/media";
import Link from "next/link";
import {CircleArrow} from "@/ui/arrow";


export default function HeroPortfolio() {
    return (
        <div className="flex flex-wrap justify-center content-center py-16 flex-col gap-9 lg:flex-row lg:justify-between lg:gap-0">
            <div className="flex items-center">
                <p className="uppercase">See our portfolio</p>
            </div>
            <MediaGallery>
                <Media src="/media-1.jpg" alt="" width="w-[140px]" height="h-[70px]"/>
                <Media src="/media-2.jpg" alt="" width="w-[140px]" height="h-[70px]"/>
                <Media src="/media-3.jpg" alt="" width="w-[140px]" height="h-[70px]"/>
            </MediaGallery>
            <Link href="#" className="uppercase flex gap-12 items-center">
                Scroll Now
                <CircleArrow />
            </Link>
        </div>
    )
}