import React from "react";
import './FeaturedMovie.css'
import PlayArrow from '../assets/icons/play_arrow.svg';

const FeaturedMovie = ({ item }) => {
  let releaseDate = new Date(item.first_air_date);
  let genres = []

  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  const limitedOverview = item.overview.length > 300 ? item.overview.slice(0, 300) + '...' : item.overview;

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--description">{limitedOverview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton"> <img src={PlayArrow} alt="Play Arrow" style={{ width: 30, marginRight: 10 }} />Assistir</a>
            <a href={`/list/add/${item.id}`} className="featured--moreinfo">Mais informações</a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FeaturedMovie;
