import {Divider} from "@/ui/divider";
import {Avatar, AvatarsList} from "@/ui/avatar";
import {FaCalendar, FaDollarSign, FaStar} from "react-icons/fa";
import {GiMoneyStack} from "react-icons/gi";

export default function AboutTitle() {
    return (
        <h2 className="text-4xl flex flex-col">
            <span className="flex items-center gap-2">
                At oxaley <Divider color="bg-white" width="small" /> we believe
            </span>
            <span>that design is not just</span>
            <span>about appearance but</span>
            <span className="flex items-center gap-2">
                also <span className="text-[#848399]">about creating</span>  <Divider color="bg-gray-300" width="small" />
            </span>
            <span className="text-[#848399] flex items-center gap-2">
                immersive and
                <AvatarsList>
                    <Avatar background="bg-black" borderColor="border-white" media={<FaCalendar className="text-white w-4 h-4" />} />
                    <Avatar background="bg-black" borderColor="border-white" media={<GiMoneyStack className="text-white w-4 h-4" />} />
                    <Avatar background="bg-black" borderColor="border-white" media={<FaDollarSign className="text-white w-4 h-4" />} />
                    <Avatar background="bg-black" borderColor="border-white" media={<FaStar className="text-white w-4 h-4" />} />
                </AvatarsList>
            </span>
            <span className="flex items-center gap-2 text-[#848399]">
                meaningful <Divider color="bg-gray-300" width="small" /> experiences
            </span>
        </h2>
    )
}