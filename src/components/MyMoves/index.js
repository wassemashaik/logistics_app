import { Component, useEffect, useState } from "react";
import "./index.css";

const MyMoves = () => {
  const [logisticData, setLogisticData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  const getMovesData = async () => {
    const apiUrl =
      "https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    if (response.ok === true) {
      console.log(data);
      const updatedGeneralData = data.Customer_Estimate_Flow.map(
        (customer) => ({
          callBack: customer.call_back,
          customStatus: customer.custom_status,
          dateCreated: customer.date_created,
          dateOfCancel: customer.date_of_cancel,
          dateOfComplete: customer.date_of_complete,
          distance: customer.distance,
          estimateAmount: customer.estimateAmount,
          estimateComparison: customer.estimate_comparison,
          estimateId: customer.estimate_id,
          estimateStatus: customer.estimate_status,
          moveDateFlexible: customer.move_date_flexible,
          movingFrom: customer.moving_from,
          movingOn: customer.moving_on,
          movingTo: customer.moving_to,
          newElevatorAvailability: customer.new_elevator_availability,
          newFloorNo: customer.new_floor_no,
          newHouseAdditionalInfo: customer.new_house_additional_info,
          newParkingDistance: customer.new_parking_distance,
          oldElevatorAvailability: customer.old_elevator_availability,
          oldFloorNo: customer.old_floor_no,
          oldHouseAdditionalInfo: customer.old_house_additional_info,
          oldParkingDistance: customer.old_parking_distance,
          orderDate: customer.order_date,
          orderReviewed: customer.order_reviewed,
          packingService: customer.packing_service,
          propertySize: customer.property_size,
          serviceType: customer.service_type,
          status: customer.status,
          storageItems: customer.storage_items,
          totalItems: customer.total_items,
          unpackingService: customer.unpacking_service,
          userId: customer.user_id,
        })
      );
      console.log("Updated General Data: ", updatedGeneralData);

      const fromAddressDetails = data.Customer_Estimate_Flow.map(
        (customer) => ({
          firstName: customer.from_address.firstName,
          fromAddress: customer.from_address.fromAddress,
          fromCity: customer.from_address.fromCity,
          fromLocality: customer.from_address.fromLocality,
          fromState: customer.from_address.fromState,
          lastName: customer.from_address.lastName,
          pincode: customer.from_address.pincode,
        })
      );
      console.log("from Address:", fromAddressDetails);

      const toAddressDetails = data.Customer_Estimate_Flow.map((customer) => ({
        firstName: customer.to_address.firstName,
        toAddress: customer.to_address.toAddress,
        toCity: customer.to_address.toCity,
        toLocality: customer.to_address.toLocality,
        toState: customer.to_address.toState,
        lastName: customer.to_address.lastName,
        pincode: customer.to_address.pincode,
      }));
      console.log("to Address:", toAddressDetails);

      const customItemDetails = data.Customer_Estimate_Flow.map((customer) => ({
        ItemDetailsArray: customer.items.customItems.items.map((item) => ({
          id: item.id,
          itemDescription: item.item_description,
          itemHeight: item.item_height,
          itemLength: item.item_length,
          itemName: item.item_name,
          itemQty: item.item_qty,
          itemWidth: item.item_width,
        })),
        units: customer.items.customItems.units,
      }));
      console.log("Item Details:", customItemDetails);

      const inventoryDetails = data.Customer_Estimate_Flow.map((customer) => ({
        inventoryDetailsArray: customer.items.inventory.map((invent) => ({
          category: invent.category,
          displayName: invent.displayName,
          id: invent.id,
          name: invent.name,
          order: invent.order,
        })),
      }));
      setInventoryData(inventoryDetails);
      if (inventoryData && inventoryData.length > 0){
        const flatInventory = inventoryData.flatMap((inventory) => inventory.inventoryDetailsArray)

        const furnitureItems = flatInventory.filter((item) => item.displayName === 'Furniture')
        const furnitureDetails = furnitureItems.map((furniture) => ({
            furnitureDetailsArray: furniture.category.map((item) => ({
                FurnitureDisplayName: item.displayName,
                items: item.items.map((types) => ({
                    sofaTypeDisplayName: types.displayName
                }))
            }))
        }))
        // furniture selected:true condition then the furniture is displayed
        // have to seperate the items into individual components so that you can understand clearly
        // or it will get messy
        // card component should be added in here then there details should be seen and later 
        // more details should be placed in other components and use bootstrap accordian 'https://react-bootstrap.netlify.app/docs/components/accordion'
        const electronicsItems = flatInventory.filter((item) => item.displayName === 'Electronics')
        const vehicleItems = flatInventory.filter((item) => item.displayName === 'Vehicle')
        const boxesItems = flatInventory.filter((item) => item.displayName === 'Boxes/Trolley')
        const otherItems = flatInventory.filter((item) => item.displayName === 'Other appliances')
        console.log("furniture Items: ", furnitureItems)
        console.log("electronics Items: ", electronicsItems)
        console.log("vehicle Items: ",vehicleItems)
        console.log("boxes/trolley Items: ",boxesItems)
        console.log("Other Appliances: ",otherItems)
    }
    }
  };

  useEffect(() => {
    getMovesData()
  }, []);

  const renderSuccessView = () => (
    <div>
        Success View 

    </div>
  )
  return (
    <div className="my-move-main-container">
      <h1>My Moves</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo
        assumenda, ad tempore nesciunt, odio expedita odit perspiciatis vitae
        voluptate eum dicta quasi magnam perferendis repudiandae eligendi quos
        sed enim.
      </p>
    </div>
  );
};

export default MyMoves;
