import React from 'react'

const headerText = (amount) => {
    return amount < 4 
    ? `${amount} of ${amount} items` 
    : `4 of ${amount} items`

}
const ItemHeader = ({ itemsAmount }) =>{
    return(
        <div className="header-result">
            <span>
                {headerText(itemsAmount)}
            </span>
        </div>
    )
}

export default ItemHeader