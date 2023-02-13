import ItemCount from './ItemCount';

const ItemDetail = ({ titulo, imagen, desc, stock = 10 }) => {


    const onAdd = (parametro) => {
        console.log(parametro)
    }

    return (
        <div>
            <h1>Alto juego - $1500</h1>
            <img src="https://picsum.photos/600/300" alt="picsum" />
            <p> texto de rellenotexto de rellenotexto de rellenotexto de rellenotexto de rellenotexto de rellenotexto de relleno
            </p>
            <ItemCount stock={stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail