import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sort: string) => void;
    selectedSortOrder: string | null;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: Props) => {
    const sortOrders = [
        {value: '', label: 'Relevence'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-release', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]
    const currentSortOrder = sortOrders.find(sortOrder => sortOrder.value === selectedSortOrder)
    return (
        <Menu>
            <MenuButton as={Button}
                        rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevence'}</MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}
                              value={order.value}>{order.label}</MenuItem>))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;