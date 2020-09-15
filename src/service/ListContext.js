import React, { useContext, useState } from 'react';

export const ListCartContext = React.createContext();

export const useListContext = () => useContext(ListCartContext);

export function ListProvider({ children }) {
    const [list, setList] = useState([]);
    //const [listCuantity, setListCuantity] = useState([]);
    //const [total, setTotal] = useState(0);


    function addItem(newItem, quantity) {

        const idx = list.findIndex((listI) => listI.item.id === newItem.id)
        if (idx === -1) {
            const l = [...list, { item: newItem, quantity }]
            setList(l)
        } else {
            const newQuantity = list[idx].quantity + quantity
            const oldI = list.filter((oldI) => oldI.item.id !== list[idx].item.id)
            const l = [...oldI, { item: list[idx].item, quantity: newQuantity }]
            setList(l)
        }

    }


    const removeItem = (oldItem) => {
        const oldI = list.filter((oldI) => oldI.item.id !== oldItem.item.id)
        setList(oldI)
    }

    const sizeQuantity = () => {
        return list.reduce((prev, next) => prev + next.quantity, 0)
    }

    const price = () => {
        return list.reduce((prev, next) =>
            (prev + (next.quantity * next.item.price)), 0)
    }



    function cleanList() {
        setList([]);
    }

    return <ListCartContext.Provider value = {
            {
                list,
                addItem,
                quantity: list.length,
                cleanList,
                //total,
                removeItem,
                sizeQuantity,
                price
            }
        } > { children } <
        /ListCartContext.Provider>
}