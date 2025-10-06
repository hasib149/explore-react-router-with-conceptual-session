import React from "react";
import { useLoaderData } from "react-router";

const PlantsDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  const { name, description, category, price, image } = data.plants;
  return (
    <div>
      <div className="card bg-base-100 mx-auto w-96 shadow-sm">
        <figure className="h-50 overflow-hidden">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>{category}</h3>
          <p>{description}</p>
          <h2>{price}$</h2>
          <div className="card-actions justify-end">
            <button className="btn">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;
