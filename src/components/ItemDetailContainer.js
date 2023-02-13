import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = () =>{
    const params = useParams()
    return (
        <div>
            <ItemDetail />
        </div>
    )
}
export default ItemDetailContainer