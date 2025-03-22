import React from "react";
import "../styles/App.css";

interface PokemonCardProps {
  name: string;
  img: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, img }) => {
  return (
    <div className="pokemon-card">
      <p>{name}</p>
      <p><img src={img}/></p>
    </div>
  );
};

export default PokemonCard;
