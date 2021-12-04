import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import callToApi from '../services/callToApi';
import MediaDetails from './MediaDetails';

const App = () => {
  const [imagePath, setiImagePath] = useState('');
  const [mediaToRender, setMediaToRender] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [showGenres, setShowGenres] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callToApi.getConfiguration().then(response => {
      setiImagePath(response);
      console.log(response);
    });
  }, []);
  useEffect(() => {
    callToApi.getMovieGenres().then(response => {
      setMovieGenres(response);
      console.log(response);
    })
  }, []);

  useEffect(() => {
    callToApi.getShowGenres().then(response => {
      setShowGenres(response)
      console.log(response);
    })
  }, []);
  useEffect(() => {
    callToApi.getTrendingMedia().then(response => {
      setMediaToRender(response);
      console.log(response);
      setLoading(false);
    });
  }, []);


  const whatGenre = (mediaType, genreIdList) => {
    if (mediaType === "movie") {
      const genresNames = genreIdList.map((genreId) => {
        return movieGenres.find((genre) => {
          return genre.id === genreId;
        })
      })
      const trueNames = genresNames.map((genre) => {
        return genre.name;
      })
      return trueNames;
    }
    else {
      const genresNames = genreIdList.map((genreId) => {
        return showGenres.find((genre) => {
          return genre.id === genreId;
        })
      })
      const trueNames = genresNames.map((genre) => {
        return genre.name;
      })
      return trueNames;
    }
  }

  let filteredData = mediaToRender.filter((media) => {
    if (media.mediaType === 'movie') {
      return media.titleMovie.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }
    else {
      return media.titleShow.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }
  })

  const handleSearch = (value) => {
    setSearch(value);
  }
  const renderMedia = () => {
    return filteredData.map((movie) => {
      const genreList = whatGenre(movie.mediaType, movie.genre);
      let genreAsParagraph = '';
      for (const genre of genreList) {
        genreAsParagraph += `${genre}, `;
      }
      return (
        <li id={movie.id} key={movie.id} className="media_list_item">
          <Link className="media_list_item_content" to={`/media/${movie.id}`} title={movie.titleMovie ? movie.titleMovie : movie.titleShow} >
            <img className="media_img" src={imagePath + movie.imagePath} alt={movie.titleMovie ? movie.titleMovie : movie.titleShow} />
            <div className="media_info">
              <h3 className="media_title">{movie.titleMovie ? movie.titleMovie : movie.titleShow}</h3>
              <p className="media_genres">{genreAsParagraph}</p>
            </div>
          </Link>
        </li>
      )
    })
  }

  const routeData = useRouteMatch('/media/:id');
  const mediaId = routeData !== null ? routeData.params.id : '';
  const clickedMedia = mediaToRender.find((media) => media.id === parseInt(mediaId));

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Main renderMedia={renderMedia} handleSearch={handleSearch} loading={loading}></Main>
          <Footer></Footer>
        </Route>
        <Route path="/media/:id">
          <Header></Header>
          <MediaDetails imagePath={imagePath} media={clickedMedia}></MediaDetails>
          <Footer></Footer>
        </Route>
      </Switch>
    </div>
  );
};

export default App;