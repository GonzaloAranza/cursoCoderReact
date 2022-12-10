import Item from "../item/Item"
import "./ItemList.css"

const ItemList = ({items}) => {
    return (
        <div className="containerCards">
          {items.map((element) => {
            return <Item key={element.id} element={element} />
          })}
        </div>
    )
}

export default ItemList

