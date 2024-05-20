import { useState } from "react"
import type { MenuItem, orderItem } from "../types"

const useOrder = () => {
    const [order, setOrder] = useState<orderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            )
            setOrder(updatedOrder)
        } else {

            const newItem: orderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }


    }

    const removeItem = (id: MenuItem['id']) => {
        //Esta funcion lo que hace es guardar en setOrder todos los elementos
        //Que hay, con excepsion del element con coinsida con el id del item
        //Es decir, deja todos los elementos menos al que le damos click
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOlder = () => {
        console.log("Ordern guardada correctamente")
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOlder
    }
}

export default useOrder