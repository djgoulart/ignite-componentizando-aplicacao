import { useState, useContext } from 'react';
import { Button } from './Button';

import './../styles/sidebar.scss';
import { GenresContext } from '../contexts/GenresContext';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {

  const { genres, selectedGenreId, selectGenre } = useContext(GenresContext)

  function handleClickButton(id: number) {
    selectGenre(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres?.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}