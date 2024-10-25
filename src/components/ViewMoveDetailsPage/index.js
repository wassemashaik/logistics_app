import "./index.css";
import InventoryDetails from '../InventoryDetails';

const ViewMoveDetailsPage = (props) => {
  const { logisticData } = props;
  const {
    newElevatorAvailability,
    newFloorNo,
    newHouseAdditionalInfo,
    newParkingDistance,
    oldElevatorAvailability,
    oldFloorNo,
    oldHouseAdditionalInfo,
    orderDate,
    oldParkingDistance,
    userId,
    moveDateFlexible,
  } = logisticData;
  console.log("details page: ", logisticData);
  return (
    <>
      <div className="additional-house-info-container">
        <h4 className="address-heading">House Details</h4>
        <button className="info-btn">Edit House Details</button>
      </div>
      <div className="house-details">
        <h4 className="house-details-head">Existing House Details</h4>
        <div className="house-floor-container">
          <div className="house-floor-details">
            <h4 className="address-heading">Floor No.</h4>
            <p className="icon-text">{oldFloorNo}</p>
          </div>
          <div className="house-floor-details">
            <h4 className="address-heading">Elevator Available</h4>
            <p className="icon-text">{oldElevatorAvailability}</p>
          </div>
          <div className="house-floor-details">
            <h4 className="address-heading">
              Distance from Elevator / Staircase to truck
            </h4>
            <p className="icon-text">{oldParkingDistance}</p>
          </div>
        </div>
      </div>
      <div className="house-details">
        <h4 className="house-details-head">New House Details</h4>
        <div className="house-floor-container">
          <div className="house-floor-details">
            <h4 className="address-heading">Floor No.</h4>
            <p className="icon-text">{newFloorNo}</p>
          </div>
          <div className="house-floor-details">
            <h4 className="address-heading">Elevator Available</h4>
            <p className="icon-text">{newElevatorAvailability}</p>
          </div>
          <div className="house-floor-details">
            <h4 className="address-heading">
              Distance from Elevator / Staircase to truck
            </h4>
            <p className="icon-text">{newParkingDistance}</p>
          </div>
        </div>
      </div>
      <div className="additional-house-info-container">
        <h4 className="address-heading">Inventory Details</h4>
        <button className="info-btn">Edit Inventory</button>
      </div>
      <InventoryDetails/>
      
    </>
  );
};

export default ViewMoveDetailsPage;
