import { FaArrowRight } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { TiPencil } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import { ImCheckboxChecked } from "react-icons/im";
import { IoIosWarning } from "react-icons/io";
import "./index.css";
import { useState } from "react";
import ViewMoveDetailsPage from "../ViewMoveDetailsPage";

const MovesCard = (props) => {
  const [openItems, setOpenItems] = useState({});
  const { logisticData } = props;
  console.log("logistic Data:", logisticData);
  const openAdditionalInfo = (estimateId) => {
    setOpenItems((prev) => ({
      ...prev,
      [estimateId]: !prev[estimateId],
    }));
  };

  return (
    <ul className="unordered-list">
      {logisticData.length > 0 ? (
        logisticData.map((data) => (
          <li className="list-item" key={data.estimateId}>
            <div className="list-item-main-container">
              <div className="address-container">
                <div className="from-container from">
                  <h4 className="address-heading">From</h4>
                  <p className="address">{data.movingFrom}</p>
                </div>
                <button className="direction-button">
                  <FaArrowRight />
                </button>
                <div className="from-container">
                  <h4 className="address-heading">To</h4>
                  <p className="address">{data.movingTo}</p>
                </div>
                <div className="from-container">
                  <h4 className="address-heading">Request#</h4>
                  <p className="address estimate">{data.estimateId}</p>
                </div>
              </div>
              <div className="button-details-container">
                <div className="details-container">
                  <div className="details">
                    <FaHouse className="detail-icon" />{" "}
                    <p className="icon-text">{data.propertySize}</p>
                  </div>
                  <div className="details">
                    <FaBoxes className="detail-icon" />{" "}
                    <p className="icon-text">{data.totalItems}</p>
                  </div>
                  <div className="details">
                    <GiPathDistance className="detail-icon" />{" "}
                    <p className="icon-text">{data.distance}</p>
                  </div>
                  <div className="details">
                    <SlCalender className="detail-icon" />{" "}
                    <p className="icon-text">{data.movingOn}</p>
                    <TiPencil />
                  </div>
                  <div className="details">
                    <ImCheckboxChecked className="detail-icon black-icon" />{" "}
                    <p className="icon-text">is flexible</p>
                  </div>
                </div>
                <div className="button-container">
                  <button
                    onClick={() => openAdditionalInfo(data.estimateId)}
                    className="view-move-button"
                    type="button"
                    variant="outline-danger"
                  >
                    View move details
                  </button>
                  <button variant="danger" className="quote-btn">
                    {data.customStatus}
                  </button>{" "}
                </div>
              </div>
              <p className="icon-text">
                <IoIosWarning className="disclaimer-icon" />{" "}
                <span className="disclaimer">Disclaimer:</span>Please update
                your move date before two days of shifting
              </p>
              {openItems[data.estimateId] ? (
                <div className="additional-info-main-container">
                  <div className="row-container">
                    <div className="additional-info-container">
                      <h4 className="address-heading">
                        Additional Information
                      </h4>
                      <p className="icon-text">Test Data</p>
                    </div>
                    <button type="button" className="info-btn">
                      Edit Additional Info
                    </button>
                  </div>
                  <ViewMoveDetailsPage logisticData={data} />
                </div>
              ) : null}
            </div>
          </li>
        ))
      ) : (
        <div>No logistics found</div>
      )}
    </ul>
  );
};
export default MovesCard;
