import {MediaGallery, MediaSkeleton} from "@/ui/media";

export default function AboutGrid() {
    return (
        <MediaGallery flexDirection="col">
            <MediaSkeleton width={140} height={70} />
            <MediaSkeleton width={140} height={70} />
            <MediaSkeleton width={140} height={70} />
        </MediaGallery>
    )
}