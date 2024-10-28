import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./index.css";
import MovesCard from "../MovesCard";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const MyMoves = () => {
  const [logisticData, setLogisticData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  const getMovesData = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    const apiUrl =
      "https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      setApiStatus(apiStatusConstants.success);
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
          inventoryDetailsArray: customer.items.inventory.map((invent) => ({
            category: invent.category.map((item) => ({
              name: item.displayName,
              typesOfItems: item.items.map((index) => ({
                itemName: index.displayName,
                itemOrder: index.order,
              })),
              itemsCount: item.items.length,
            })),
            typeOfName: invent.displayName,
            id: invent.id,
          })),
        })
      );

      setLogisticData(updatedGeneralData);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
    getMovesData();
  }, []);

  const renderLoadingView = () => (
    <div className="loader-container">
      <Spinner animation="grow" variant="danger" />
    </div>
  );
  const renderSuccessView = () => (
    <div className="my-move-main-container">
      <h1 className="heading">My Moves</h1>
      <MovesCard logisticData={logisticData} />
    </div>
  );

  const renderFailureView = () => <div>Failure</div>;

  const renderFinalView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };
  return <>{renderFinalView()}</>;
};

export default MyMoves;
