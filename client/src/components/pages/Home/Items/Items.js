import Item from "./index";

const Items = () => {
    const items = [
        {
            id: 1,
            name: "Item 1",
            description: "The item 1 description",
            price: 0.50
        },
        {
            id: 2,
            name: "Item 2",
            description: "The item 2 description",
            price: 0.90
        },
        {
            id: 3,
            name: "Item 3",
            description: "The item 3 description",
            price: 0.78
        }
    ]

    const mappedItems = items.map(i => <Item key={i.id} item={i}/>)

    return <>
        <h2>List of items</h2>
        {mappedItems}
    </>
}

export default Items;