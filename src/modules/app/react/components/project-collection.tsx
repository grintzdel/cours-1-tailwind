import {Tile} from "@/ui/tile";

export default function ProjectCollection() {
    return (
        <div className="flex flex-col px-3 md:px-5">
            <Tile
             title="Mobile App Design"
             titleSize="text-3xl"
             titleColor="text-black"
             imageSrc="/media-1.jpg"
             imageAlt="Media 1"
             imageAxis="vertical"
             imageHeight="h-50"
             imageWidth="w-[150px]"
             description="We help your business create mobile apps that are not only attractive, but also functionnal."
            />
            <Tile
                title="Web Design"
                titleSize="text-3xl"
                titleColor="text-black"
                imageSrc="/media-2.jpg"
                imageAlt="Media 1"
                imageAxis="vertical"
                imageHeight="h-50"
                imageWidth="w-[150px]"
                description="We help your business create mobile apps that are not only attractive, but also functionnal."
            />
            <Tile
                title="Development"
                titleSize="text-3xl"
                titleColor="text-black"
                imageSrc="/media-3.jpg"
                imageAlt="Media 1"
                imageAxis="vertical"
                imageHeight="h-50"
                imageWidth="w-[150px]"
                description="We help your business create mobile apps that are not only attractive, but also functionnal."
            />
        </div>
    )
}