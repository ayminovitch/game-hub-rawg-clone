import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
    onSearch: (searchQuery: string) => void;
}

const NavBar = ({onSearch}: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px'/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;