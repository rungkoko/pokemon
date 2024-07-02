import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './css/Product.css';
import Header from './Header';
import Footer from './Footer';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { poke } = location.state;

  const [quality, setQuality] = useState(1); 

  useEffect(() => {
    document.body.classList.add('product-page');
    return () => {
      document.body.classList.remove('product-page');
    };
  }, []);

  const increaseQuality = () => {
    setQuality(prevQuality => prevQuality + 1);
  };

  const decreaseQuality = () => {
    setQuality(prevQuality => (prevQuality > 1 ? prevQuality - 1 : 1));
  };

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('');
  };

  const addToPocket = () => {
    const pocket = JSON.parse(localStorage.getItem('pocket') || '[]');
    const existingPokeIndex = pocket.findIndex(p => p.id === poke.id);
    
    if (existingPokeIndex >= 0) {
      pocket[existingPokeIndex].quality = quality;
    } else {
      pocket.push({ ...poke, quality });
    }

    localStorage.setItem('pocket', JSON.stringify(pocket));

    navigate('/pokemon');
  };

  return (
    <>
      <Header
        search={search}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
        pocketCount={JSON.parse(localStorage.getItem('pocket') || '[]').length}
      />
      <a href="#" onClick={(e) => { e.preventDefault(); navigate(-1); }} className="back-button">
        <svg width="18" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2499 14.9401L6.35988 10.0501C5.78238 9.47256 5.78238 8.52756 6.35988 7.95006L11.2499 3.06006" stroke="#373737" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </a>

      <div className="product-container">
        <img src={poke.sprites.other['official-artwork'].front_default} alt={poke.name} />
        <div>
          <h2>{capitalizeFirstLetter(poke.name)}</h2>
          <div className='types-container'>
            {poke.types.map((type, index) => (
              <span key={index} className={`type-name ${type.type.name}`}>
                {capitalizeFirstLetter(type.type.name)}
              </span>
            ))}
          </div>
          <p className="stats-container">
            Stats: {poke.stats.map(stat => `${capitalizeFirstLetter(stat.stat.name)}`).join(', ')}
          </p>
          <p className="abilities">
            Abilities: {poke.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(', ')}
          </p>
          <div className="quality-control">
            <p className="quality-label">Quality:</p>
            <div className="quality-buttons">
              <button onClick={decreaseQuality} className="quality-button">-</button>
              <span className="quality-value">{quality}</span>
              <button onClick={increaseQuality} className="quality-button">+</button>
            </div>
          </div>

          <button onClick={addToPocket} className="add-to-pocket-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#f0f0f0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.00001 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H8.00001C3.73001 8 3.03001 9.99 3.30001 12.43L4.05001 18.43C4.26001 20.39 4.98001 22 9.00001 22Z" stroke="#f0f0f0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.4955 12H15.5045" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.49451 12H8.50349" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add to Pocket
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
