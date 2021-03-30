import { createContext, useEffect, useState, } from 'react';
import { api } from './../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresContextData {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  selectedGenre: GenreResponseProps,
  selectGenre: (id: number) => void,
}

export const GenresContext = createContext<GenresContextData>({} as GenresContextData);

export const GenresContextProvider:React.FC = ({ children }) => {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  },[selectedGenreId]);

  const selectGenre = function(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <GenresContext.Provider value={{ genres, selectedGenreId, selectedGenre, selectGenre}}>
      {children}
    </GenresContext.Provider>
  )
}