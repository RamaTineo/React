import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import CartWidget from "./CartWidget"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cartWidget" element={<CartWidget/>}/>
            </Routes>
        </main>
    )
} 

export default Main