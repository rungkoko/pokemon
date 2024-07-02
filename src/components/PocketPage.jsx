import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/PocketPage.css';
import Header from './Header';
import Footer from './Footer';

const PocketPage = () => {
  const [pocket, setPocket] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('pocket-page');

    const storedPocket = JSON.parse(localStorage.getItem('pocket') || '[]');
    console.log(storedPocket);
    setPocket(storedPocket);

    return () => {
      document.body.classList.remove('pocket-page');
    };
  }, []);

  const handlePokemonClick = (poke) => {
    console.log(poke);
    navigate(`/pokemon/${poke.id}`, { state: { poke } });
  };

  const removeFromPocket = (pokeId) => {
    const storedPocket = JSON.parse(localStorage.getItem('pocket') || '[]');
    const updatedPocket = storedPocket.filter(poke => poke.id !== pokeId);
    localStorage.setItem('pocket', JSON.stringify(updatedPocket));
    setPocket(updatedPocket);
  };

  const groupedPocket = pocket.reduce((acc, poke) => {
    if (!acc[poke.id]) {
      acc[poke.id] = { ...poke, quality: 0 };
    }
    acc[poke.id].quality += poke.quality;
    return acc;
  }, {});

  console.log(groupedPocket);

  const uniquePocket = Object.values(groupedPocket);
  console.log(uniquePocket);

  const totalQuantity = uniquePocket.reduce((acc, poke) => acc + poke.quality, 0);

  return (
    <>
      <Header
        search=""
        handleSearch={() => {}}
        clearSearch={() => {}}
        pocketCount={uniquePocket.length}
      />
      <div className="pocket-page-wrapper">
        <div className="pocket-items-container">
          <div className="pocket-list-header">
            <span className="pocket-list-title">Pocket List ({uniquePocket.length})</span>
          </div>
          <div className="pocket-list-headers">
            <span className="pocket-list-productname">Product Name</span>
            <span className="pocket-list-quantity">Quantity</span>
          </div>
          {uniquePocket.map(poke => (
            <div key={poke.id} className="pocket-item-card">
              <div className="pocket-item-info" onClick={() => handlePokemonClick(poke)}>
                <img src={poke.sprites.other['official-artwork'].front_default} alt={poke.name} />
                <div className="pokemon-details">
                  <p>{poke.name}</p>
                  <div className="types-container">
                    {poke.types.map((type, index) => (
                      <span key={index} className={`type-name ${type.type.name}`}>
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="quantity-info">
                <p>{poke.quality}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromPocket(poke.id);
                }}
                className="remove-pocket-button"
              >
                <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.33 16.5H13.66" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 12.5H14.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="pocket-summary">
          <h3>Order Summary</h3>
          <div className="pocket-summary-content">
            <p className="subtotal">
              <span className="label">Subtotal:</span>
              <span className="value">{uniquePocket.length} Products</span>
            </p>
            <p className="total-quantity">
              <span className="label">Quantity:</span>
              <span className="value">{totalQuantity} Quantity</span>
            </p>
          </div>
          <center><button className="checkout-button">Proceed to Checkout</button></center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PocketPage;
