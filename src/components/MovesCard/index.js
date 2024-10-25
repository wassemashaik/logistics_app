import { FaArrowRight } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { TiPencil } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import { ImCheckboxChecked } from "react-icons/im";
import { IoIosWarning } from "react-icons/io";
import Button from "react-bootstrap/Button";
import "./index.css";
import { useState } from "react";
import ViewMoveDetailsPage from "../ViewMoveDetailsPage";

const MovesCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { logisticData } = props;
  const {
    customStatus,
    distance,
    estimateId,
    movingFrom,
    movingOn,
    movingTo,
    propertySize,
    totalItems,
  } = logisticData;

  const openAdditionalInfo = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <li className="list-item" key={estimateId}>
      <div className="list-item-main-container">
        <div className="address-container">
          <div className="from-container">
            <h4 className="address-heading">From</h4>
            <p className="address">{movingFrom}</p>
          </div>
          <button className="direction-button">
            <FaArrowRight />
          </button>
          <div className="from-container">
            <h4 className="address-heading">To</h4>
            <p className="address">{movingTo}</p>
          </div>
          <div className="from-container">
            <h4 className="address-heading">Request#</h4>
            <p className="address estimate">{estimateId}</p>
          </div>
        </div>
        <div className="details-container">
          <div className="details">
            <FaHouse className="detail-icon" />{" "}
            <p className="icon-text">{propertySize}</p>
          </div>
          <div className="details">
            <FaBoxes className="detail-icon" />{" "}
            <p className="icon-text">{totalItems}</p>
          </div>
          <div className="details">
            <GiPathDistance className="detail-icon" />{" "}
            <p className="icon-text">{distance}</p>
          </div>
          <div className="details">
            <SlCalender className="detail-icon" />{" "}
            <p className="icon-text">{movingOn}</p>
            <TiPencil />
          </div>
          <div className="details">
            <ImCheckboxChecked className="detail-icon black-icon" />{" "}
            <p className="icon-text">is flexible</p>
          </div>
          <div className="button-container">
            <Button
              type="button"
              onClick={openAdditionalInfo}
              className="view-move-button"
            >
              View move details
            </Button>{" "}
            <Button className="quote-btn">{customStatus}</Button>{" "}
          </div>
        </div>
        <p className="icon-text">
          <IoIosWarning className="disclaimer-icon" />{" "}
          <span className="disclaimer">Disclaimer:</span>Please update your move
          date before two days of shifting
        </p>
        {isClicked ? (
          <div className="additional-info-main-container">
            <div className="row-container">
              <div className="additional-info-container">
                <h4 className="address-heading">Additional Information</h4>
                <p className="icon-text">Test Data</p>
              </div>
              <button className="info-btn">Edit Additional Info</button>
            </div>
            <ViewMoveDetailsPage logisticData={logisticData} />
          </div>
        ) : null}
      </div>
    </li>
  );
};
export default MovesCard;
