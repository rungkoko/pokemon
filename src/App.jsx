import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Preview from './components/Preview';
import Header from './components/Header';
import Title from './components/Title';
import Product from './components/Product';
import PocketPage from './components/PocketPage';
import Footer from './components/Footer'; // นำเข้าฟุตเตอร์

function App() {
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const loadPokes = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          Array.from({ length: 12 }, (_, i) => 
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
          )
        );

        setPokes(responses.map(response => response.data));
        setError("");
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadPokes();

    return () => {}; // Clean up function
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const clearSearch = () => {
    setSearch("");
  };

  const filteredPokes = pokes.filter(poke =>
    poke.name.toLowerCase().includes(search)
  );

  const showGridView = () => {
    setIsGridView(true);
  };

  const showListView = () => {
    setIsGridView(false);
  };

  const navigate = useNavigate();

  const handleDetailClick = (poke) => {
    navigate('/product', { state: { poke } });
  };

  const getPocketCount = () => {
    const pocket = JSON.parse(localStorage.getItem('pocket') || '[]');
    return pocket.length;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="app">
      <Header
        search={search}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
        pocketCount={getPocketCount()}
      />
      <Title
        isGridView={isGridView}
        showGridView={showGridView}
        showListView={showListView}
        resultCount={filteredPokes.length}
      />
      <div className={`pokemon-container ${isGridView ? 'grid-view' : 'list-view'}`}>
        {filteredPokes.length > 0 ? (
          filteredPokes.map((poke) => (
            <Preview key={poke.id} poke={poke} onDetailClick={handleDetailClick} />
          ))
        ) : (
          <div className="no-results">
            Oops! Nothing was found for "{search}" Please try to search for something else
          </div>
        )}
      </div>
      <Footer /> {/* เพิ่ม Footer */}
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon" element={<App />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pocket" element={<PocketPage />} />
      </Routes>
    </Router>
  );
}
