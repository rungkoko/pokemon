import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Header.css';

const Header = ({ search, handleSearch, clearSearch, pocketCount }) => { 
  const navigate = useNavigate();

  return (
    <div className="header-container">
 <div className="header-nav">
        <p>Welcome to Pokémon Shop!</p>
        <div className="header-info">
          <span className="header-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="#292D32" stroke-width="1.5"/>
<path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#292D32" stroke-width="1.5"/>
</svg>

            Contact 123456
          </span>
          <span className="header-separator">|</span>
          <span className="header-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8H8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11H6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 14H4" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            Track your order
          </span>
          <span className="header-separator">|</span>
          <span className="header-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.75 2.45001C11.45 1.86001 12.58 1.86001 13.26 2.45001L14.84 3.80001C15.14 4.05001 15.71 4.26001 16.11 4.26001H17.81C18.87 4.26001 19.74 5.13001 19.74 6.19001V7.89001C19.74 8.29001 19.95 8.85001 20.2 9.15001L21.55 10.73C22.14 11.43 22.14 12.56 21.55 13.24L20.2 14.82C19.95 15.12 19.74 15.68 19.74 16.08V17.78C19.74 18.84 18.87 19.71 17.81 19.71H16.11C15.71 19.71 15.15 19.92 14.85 20.17L13.27 21.52C12.57 22.11 11.44 22.11 10.76 21.52L9.18 20.17C8.88 19.92 8.31 19.71 7.92 19.71H6.17C5.11 19.71 4.24 18.84 4.24 17.78V16.07C4.24 15.68 4.04 15.11 3.79 14.82L2.44 13.23C1.86 12.54 1.86 11.42 2.44 10.73L3.79 9.14001C4.04 8.84001 4.24 8.28001 4.24 7.89001V6.20001C4.24 5.14001 5.11 4.27001 6.17 4.27001H7.9C8.3 4.27001 8.86 4.06001 9.16 3.81001L10.75 2.45001Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8.13V12.96" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9945 16H12.0035" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            All Offers
          </span>
        </div>
      </div>
      <nav className="navbar">
        <img
          src="../src/images/pokemon-logo.png"
          alt="Pokémon Logo"
          className="logo"
          onClick={() => navigate('/pokemon/')}
        />
        <div className="search-container">
          <div className="search-icon">
            <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 22L20 20" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder=" Search Name Pokémon..."
            value={search}
            onChange={handleSearch}
          />
          {search && (
            <div className="clear-icon" onClick={clearSearch}>
              <svg width="16" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.17 14.83L14.83 9.17" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.83 14.83L9.17 9.17" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
        <div className="navbar-links">
          <div className="navbar-link" onClick={() => navigate('/username')}>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>&nbsp;&nbsp;Username</span>
          </div>
          <div className="separator"> | </div>
          <div className="navbar-link" onClick={() => navigate('/pocket')}>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#FFCB05" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.00001 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H8.00001C3.73001 8 3.03001 9.99 3.30001 12.43L4.05001 18.43C4.26001 20.39 4.98001 22 9.00001 22Z" stroke="#FFCB05" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.4955 12H15.5045" stroke="#FFCB05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.49451 12H8.50349" stroke="#FFCB05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {pocketCount >= 0 && (
                <span className="pocket-count">{pocketCount}</span>
              )}
            </div>
            <span>&nbsp;&nbsp;Pocket</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
