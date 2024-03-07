import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import './App.css'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      // Total list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Feature
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let featured = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(featured.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      setBlackHeader(window.scrollY > 10)
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className='page'>

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> por Gabriel <br />
        Direitos de imagem para Netflix <br />
        Dados fornecidos por Themoviedb.org
      </footer>

      {movieList.length <= 0 && <div id="loader" class="nfLoader"></div>}
    </div>
  );
}

export default App;