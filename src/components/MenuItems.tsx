import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

const MenuItems = ({ item, addItem }: MenuItemProps) => {
    return (
        <>
            <button
                onClick={() => addItem(item)}
                className="flex justify-between w-full px-8 z-30 py-4 dark:bg-gray-400 bg-teal-400 rounded-md text-white relative font-bold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-teal-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:1px_1px_1px_#000;]  text-lg uppercase">
                <p>
                    {item.name}
                </p>
                <p className="  font-black">
                    €{item.price}
                </p>
            </button>

        </>
    )
}

export default MenuItems