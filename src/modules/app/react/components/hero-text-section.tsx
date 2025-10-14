import React from "react";
import Image from "next/image";
import {Title, TitlesList} from "@/ui/title";
import {Avatar, AvatarsList} from "@/ui/avatar";


export default function HeroTextSection() {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-8">
                <TitlesList>
                    <Title text="Crafting" />
                    <Title text="narrative" />
                    <Title text="through" textColor="text-[#86859b]" />
                    <Title text="design" textColor="text-[#86859b]" />
                </TitlesList>
                <AvatarsList>
                    <Avatar media={<Image src="/memoji-1.png" alt="Avatar 1" width={30} height={30} />} />
                    <Avatar media={<Image src="/memoji-2.png" alt="Avatar 2" width={30} height={30} />} />
                    <Avatar media={<Image src="/memoji-3.png" alt="Avatar 3" width={30} height={30} />} />
                    <Avatar media={<Image src="/memoji-4.png" alt="Avatar 4" width={30} height={30} />} />
                </AvatarsList>
            </div>
            <div className="text-right">
                <p className="text-[#86859b]">We believe good design is key to <br /> building strong connections.</p>
            </div>
        </div>
    )
}