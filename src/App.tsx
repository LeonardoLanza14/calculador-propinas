import MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOlder } = useOrder()
  return (
    <>
      <header className=" bg-teal-300 py-5">
        <h1 className="text-center text-4xl font-bold uppercase">Calculadora De Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid  md:grid-cols-2">
        <div className="p-5">
          <h2 className="  text-4xl font-black">Menu</h2>

          <div className=" space-y-3 mt-10">

            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}

          </div>


        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOlder={placeOlder}
              />

            </>
          ) : (
            <>

              <p className=" text-center text-xl font-bold uppercase">Esperando Orden.</p>

              <div className="flex flex-row justify-center gap-2">
                <div className="w-4 h-4 rounded-full bg-teal-200 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-teal-200 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-teal-200 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </>

          )}

        </div>
      </main>

    </>
  )
}

export default App
