import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "../store.ts";

const SortSelector = () => {
    const sortOrders = [
        {value: '', label: 'Relevence'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-release', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]

    const selectedSortOrderId = useGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(sortOrder => sortOrder.value === selectedSortOrderId)
    const setSortOrder = useGameQueryStore(s => s.setSortOrder)

    return (
        <Menu>
            <MenuButton as={Button}
                        rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevence'}</MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}
                              value={order.value}>{order.label}</MenuItem>))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;