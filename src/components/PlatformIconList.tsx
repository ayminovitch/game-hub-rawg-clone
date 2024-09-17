import {HStack, Icon} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaAndroid, FaApple, FaLinux} from 'react-icons/fa';
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "../hooks/useGames.ts";
import {IconType} from "react-icons";

interface PlatformIconListProps {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: PlatformIconListProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        android: FaAndroid,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (<Icon as={iconMap[platform.slug]} color="gray.500"/>))}
        </HStack>
    );
};

export default PlatformIconList;