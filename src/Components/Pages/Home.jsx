import React from "react";
import Navbae from "../Navbae";
import Footer from "../Footer";
import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";

const Home = () => {
  const { plants } = useLoaderData();
  // console.log(plants);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 mx-3 gap-5 py-6">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
