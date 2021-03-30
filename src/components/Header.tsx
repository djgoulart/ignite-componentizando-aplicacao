import React, { useContext } from 'react';
import {GenresContext} from './../contexts/GenresContext';


const Header: React.FC = () => {
  const { selectedGenre } = useContext(GenresContext)
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}

export default Header;