import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./index.css";
import MovesCard from "../MovesCard";

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const MyMoves = () => {
  const [logisticData, setLogisticData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [vehicleList, setVehicleList] = useState([])
  const [furnitureList, setFurnitureList] = useState([])
  const [boxesList, setBoxesList] = useState([])
  const [electronicsList, setElectronicsList] = useState([])
  const [othersList, setOthersList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  
  const getMovesData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const apiUrl =
      "https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    if (response.ok === true) {
      setApiStatus(apiStatusConstants.success)
      console.log(data);
      const updatedGeneralData = data.Customer_Estimate_Flow.map(
        (customer) => ({
          customStatus: customer.custom_status,
          distance: customer.distance,
          estimateId: customer.estimate_id,
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
          propertySize: customer.property_size,
          totalItems: customer.total_items,
          userId: customer.user_id,
        })
      );
      setLogisticData(updatedGeneralData)
      console.log(logisticData)
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
                    sofaTypeDisplayName: types.displayName,
                    furnitureId:types.id,
                    order: types.order,
                    uniqueId: types.uniquieId,
                    material: types.type && types.type.length > 0
                  ? types.type  
                  .filter((indivtype) => indivtype.selected)
                  .map((selectedType) => ({
                    option: selectedType.option
                  }))[0] || null
                  : null
                }))
            }))
        }))
        setFurnitureList(furnitureDetails)
       
        const electronicsItems = flatInventory.filter((item) => item.displayName === 'Electronics')
        const electronicsDetails = electronicsItems.map((elect) => ({
          electronicsDetailsArray: elect.category.map((item) => ({
              electronicsDisplayName: item.displayName,
              items: item.items.map((types) => ({
                  electronicTypeDisplayName: types.displayName,
                  electronicId: types.id,
                  order: types.order,
                  uniqueId: types.uniquieId,
                  typeOfElectronics: types.type && types.type.length > 0
                  ? types.type  
                  .filter((indivType) => indivType.selected)
                  .map((selectedType) => ({
                    option: selectedType.option,
                  }))[0] || null
                  : null
              }))
          }))
        }))
        setElectronicsList(electronicsDetails)

        const vehicleItems = flatInventory.filter((item) => item.displayName === 'Vehicle')
        const vehiclesDetails = vehicleItems.map((vehicle) => ({
          vehicleDetailsArray: vehicle.category.map((item) => ({
              vehicleDisplayName: item.displayName,
              items: item.items.map((types) => ({
                  vehicleTypeDisplayName: types.displayName,
                  vehicleId: types.id,
                  order: types.order,
                  uniqueId: types.uniquieId,
                  typeOfvehicle: types.type && types.type.length > 0
                  ? types.type 
                  .filter((indivType) => indivType.selected)
                  .map((selectedType) => ({
                    option: selectedType.option,
                  }))[0] || null
                  : null
              }))
          }))
        }))
        setVehicleList(vehiclesDetails)

        const boxesItems = flatInventory.filter((item) => item.displayName === 'Boxes/Trolley')
        const boxesDetails = boxesItems.map((box) => ({
          boxDetailsArray: box.category.map((item) => ({
              boxesDisplayName: item.displayName,
              items: item.items.map((types) => ({
                  boxTypeDisplayName: types.displayName,
                  boxId: types.id,
                  order: types.order,
                  uniqueId: types.uniquieId,
                  sizeOfBox: types.size && types.size.length > 0
                  ? types.size 
                  .filter((indivboxSize) => indivboxSize.selected)
                  .map((selectedSize) => ({
                    option: selectedSize.option,
                    tooltip: selectedSize.tooltip
                  }))[0] || null
                  : null
              }))
          }))
        }))
        setBoxesList(boxesDetails)

        const otherItems = flatInventory.filter((item) => item.displayName === 'Other appliances')
        const otherDetails = otherItems.map((other) => ({
          otherDetailsArray: other.category.map((item) => ({
              othersDisplayName: item.displayName,
              items: item.items.map((types) => ({
                  otherTypeDisplayName: types.displayName,
                  otherId: types.id,
                  order: types.order,
                  uniqueId: types.uniquieId,
              }))
          }))
        }))
        setOthersList(otherDetails)
    }
    }else {
      setApiStatus(apiStatusConstants.failure)
    }
  };

  useEffect(() => {
    getMovesData()
  }, []);
  
  const renderLoadingView = () => (
    <div>
      <Spinner animation="border" variant="danger" />
    </div>
  )
  const renderSuccessView = () => (
    <div className="my-move-main-container">
       <h1 className="heading">My Moves</h1>
       <ul className="unordered-list">
        {logisticData.length > 0 ? (
          logisticData.map((data) => (
            <MovesCard logisticData={data} />
          ))

        ): (
          <div>No logistics found</div>
        )}
          
       </ul>
    </div>
  )

  const renderFailureView = () => (
    <div>
      Failure
    </div>
  )

  const renderFinalView = () => {
    switch(apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null    
    }
  } 
  return (
    <>
      {renderFinalView()}
    </>
  );
};

export default MyMoves;
