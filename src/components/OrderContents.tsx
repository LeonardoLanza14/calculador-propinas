import { formatCurrency } from "../helpers"
import { MenuItem, orderItem } from "../types"
import { TbTrash } from "react-icons/tb";

type OrderContentsProps = {
    order: orderItem[],
    removeItem: (id: MenuItem['id']) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="font-black dark:text-gray-400 text-4xl">Consumo</h2>

            <div className=" space-y-3 mt-10">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-teal-200 py-5 last-of-type:border-b"
                    >
                        <div>
                            <p className=" dark:text-gray-400 text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="dark:text-gray-400 text-lg font-bold">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>


                        <div>
                            <button
                                onClick={() => removeItem(item.id)}
                            >
                                <TbTrash  className=" size-6 text-red-600" />
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderContents