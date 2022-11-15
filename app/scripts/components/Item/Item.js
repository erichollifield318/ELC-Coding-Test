import React from 'react'
import ItemHeader from './ItemHeader'
import ItemList from './ItemList'

const Item = ({items}) => {
    return items.length ? (
        <div className="items-container">
            <ItemHeader itemsAmount={items.length}/>
            <ItemList items={items}/>
        </div>
    ): <div>Not Found</div>
}

export default Item