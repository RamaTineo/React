const CartWidget = () => {


    const handleClick = (e) => {
        console.log(e.target)
    }

 

    return (
        <div>
    
            <button onClick={handleClick}>terminar compra</button>
        </div>
    )











}

export default CartWidget