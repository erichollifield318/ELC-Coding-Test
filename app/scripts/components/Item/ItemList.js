import React from 'react'
import ItemRow from './ItemRow'

const mapItems = (item, index) => {
    if (index < 4) {
        return(<ItemRow item={item} key={index}/>)
    }
}

const ItemList = ({items}) =>{
    return(
    <div id="itemsList">
        {items.map(mapItems)}
    </div>)
}

export default ItemList