import React from "react";

import "./carousel.css";
import ArrowUp from "../../assets/icons/arrow-up.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";

type CarouselItemProps = {
  icon: string;
  name: string;
  shortName: string;
  price: string;
  nature: string;
  changeInPercent: string;
};

const CarouselItem = ({
  icon,
  name,
  shortName,
  price,
  nature,
  changeInPercent,
}: CarouselItemProps) => {
  return (
    <div className="carousel-item">
      <div className="carousel-icon">{icon}</div>
      <div className="carousel-name">
        <div>{shortName}</div>
        <div>{name}</div>
      </div>
      <div className="carousel-price">
        <div>{price}</div>
        <div className={`carousel-price-${nature}`}>
          <span>
            <img src={nature === "up" ? ArrowUp : ArrowDown} alt="^" />
          </span>
          {changeInPercent}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
