import {MediaGallery, MediaSkeleton} from "@/ui/media";

export default function AboutGrid() {
    return (
        <MediaGallery flexDirection="col">
            <MediaSkeleton width={200} height={100} />
            <MediaSkeleton width={200} height={100} />
            <MediaSkeleton width={200} height={100} />
        </MediaGallery>
    )
}