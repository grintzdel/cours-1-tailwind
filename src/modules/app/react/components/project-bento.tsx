import {Media, MediaBento} from "@/ui/media";

export default function ProjectBento() {
    return (
        <div className="px-3 md:px-5">
            <MediaBento>
                <Media src="/media-1.jpg" alt="First media" width="w-full" aspectRatio="16/9" />
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    <Media src="/media-2.jpg" alt="Second media" width="w-full" aspectRatio="4/3" />
                    <Media src="/media-3.jpg" alt="Third media" width="w-full" aspectRatio="4/3" />
                </div>
            </MediaBento>
        </div>
    )
}