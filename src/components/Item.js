
import {Link} from "react-router-dom"

const Item = ({producto}) => {
    return (
        <article className="card" key={producto.id}>
            <h3>{producto.tittle}</h3>
            <img src={`https://picsum.photos/200/300?random=${producto.id}`} alt={producto.title} />
            <p>${producto.price}</p>
            <Link to={"/item/"+producto.id} className="btnVerMas">Ver Más</Link>
        </article>

    )
}
export default Item