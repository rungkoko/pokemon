import React from 'react';
import './css/Preview.css';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Preview = ({ poke, onDetailClick }) => {
  return (
    <div className="pokemon-card" onClick={() => onDetailClick(poke)}>
      <img src={poke.sprites.other['official-artwork'].front_default} alt={poke.name} />
      <div className='pokemon-info'>
        <h2>{capitalizeFirstLetter(poke.name)}</h2>
        <div className='types-container'>
          {poke.types.map((type, index) => (
            <span key={index} className={`type-name ${type.type.name}`}>
              {capitalizeFirstLetter(type.type.name)}
            </span>
          ))}
        </div>
        <p className="abilities">
          Abilities: {poke.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(', ')}
        </p>
        <button onClick={(e) => { e.stopPropagation(); onDetailClick(poke); }} className="detail-button">Detail</button>
      </div>
    </div>
  );
};

export default Preview;







{/*       <p>Abilities: {poke.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(', ')}</p>
      <p>Weight: {poke.weight}</p>
      <p>Height: {poke.height}</p> */}