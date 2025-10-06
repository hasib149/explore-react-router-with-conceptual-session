import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  console.log(plant);
  const { category, description, image, name, price } = plant;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-50 overflow-hidden">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>{category}</h3>
          <p>{description}</p>
          <h2>{price}$</h2>
          <div className="card-actions justify-end">
            <Link to="/plantsDetails" className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
