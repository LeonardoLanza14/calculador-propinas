import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { orderItem } from "../types"

type OrderTotalProps = {
    order: orderItem[],
    tip: number,
    placeOlder: () => void
}


const OrderTotals = ({ order, tip, placeOlder }: OrderTotalProps) => {

    const subTotalAmount = useMemo(() => order.reduce((total, item) =>
        total + (item.quantity * item.price), 0), [order])

    //Esta parte del codigo tipAmount se debe ejecutar cuando 2 cosas  cambien:
    //Cuando cambien el porcentaje de propina, o cuando se cambie el contenido de la orden [tip, order]
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])



    return (
        <>
            <div className=" space-y-3">
                <h2 className=" font-black text-2xl">Totales y Propina</h2>
                <p>SubTotal a pagar:

                    <span className=" font-bold"> {formatCurrency(subTotalAmount)}</span>

                </p>

                <p>Propina:
                    <span className=" font-bold"> {formatCurrency(tipAmount)}</span>

                </p>


                <p>Total a pagar:

                    <span className=" font-bold"> {formatCurrency(totalAmount)}</span>

                </p>
            </div>

            <button
                onClick={placeOlder}
                disabled={totalAmount === 0}
                className="cursor-pointer transition-all bg-teal-500 text-white px-6 py-2 rounded-lg
            border-teal-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] uppercase w-full disabled:opacity-20">
                Guardar Orden
            </button>
        </>


    )
}

export default OrderTotals