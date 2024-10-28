import Accordion from "react-bootstrap/Accordion";
import "./index.css";

const InventoryDetails = (props) => {
  const { logisticData } = props;
  const { inventoryDetailsArray } = logisticData;
  console.log("inventory", inventoryDetailsArray);

  return (
    <Accordion flush className="column-container">
      {inventoryDetailsArray.map((inventory, inventoryIndex) => (
        <Accordion.Item eventKey={inventoryIndex} className="column-container">
          <Accordion.Header className="header-text">
            {inventory.typeOfName}
          </Accordion.Header>
          <Accordion.Body className="body-container">
            <div className="accord-body">
              <ul className="main-unordered">
                {inventory.category.map((catItem, catItemIndex) => (
                  <li key={catItemIndex} className="unordered-accord-items">
                    <h3 className="name-heading">{catItem.name}</h3>
                    <ul className="child-unordered">
                      {catItem.typesOfItems.map((type, typeIndex) => (
                        <li key={typeIndex} className="list-cat-item">
                          <h4 className="item-name-head">{type.itemName}</h4>
                          <p className="para-text">{type.itemOrder}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
export default InventoryDetails;
