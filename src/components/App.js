import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { useEffect, useState } from 'react';
import { Routes, Route, useMatch, Link } from 'react-router-dom';
import callToApi from '../services/callToApi';
import MediaDetails from './MediaDetails';
import FilterLabel from './FilterLabel';
import NoFoundPage from './NoFoundPage';
import Media from './Media';

const App = () => {
  const [imagePath, setiImagePath] = useState('');
  const [mediaToRender, setMediaToRender] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [showGenres, setShowGenres] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  let pageNumCont;
  const [totalPages, setTotalPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [selectedMovieGenre, setSelectedMovieGenre] = useState(null);
  const [selectedShowGenre, setSelectedShowGenre] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState('');


  useEffect(() => {
    callToApi.getConfiguration().then(response => {
      setiImagePath(response);
    });
  }, []);
  useEffect(() => {
    callToApi.getMovieGenres().then(response => {
      setMovieGenres(response);
    })
  }, []);

  useEffect(() => {
    callToApi.getShowGenres().then(response => {
      setShowGenres(response)
    })
  }, []);

  useEffect(() => {
    callToApi.getNumberOfPages().then(response => {
      setTotalPages(response);
    })
  }, []);

  useEffect(() => {
    if (pageNum === 0) {
      setPageNum(1);
      callToApi.getTrendingMedia(1).then(response => {
        setMediaToRender(response);
        console.log(response);
        setLoading(false);
      });
    }
    else {
      callToApi.getTrendingMedia(pageNum).then(response => {
        setMediaToRender(response);
        console.log(response);
        setLoading(false);
      });
    }

  }, [pageNum]);

  useEffect(() => {
    if (selectedMovieGenre !== null) {
      callToApi.filterMovieByGenre(selectedMovieGenre).then(response => {
        console.log(response);
        setMediaToRender(response);
      });
    }
  }, [selectedMovieGenre]);

  useEffect(() => {
    if (selectedShowGenre !== null) {
      callToApi.filterShowByGenre(selectedShowGenre).then(response => {
        console.log(response);
        setMediaToRender(response);
      });
    }
  }, [selectedShowGenre]);

  useEffect(() => {
    if (search.length > 1) {
      callToApi.getFilteredData(search).then(response => {
        setMediaToRender(response);
        setLoading(false);
      })
    }
    else {
      callToApi.getTrendingMedia(1).then(response => {
        setMediaToRender(response);
        console.log(response);
        setLoading(false);
      });
    }

  }, [search]);


  const whatGenre = (genreIdList) => {
    const genresNames = genreIdList.map((genreId) => {
      return movieGenres.find((genre) => {
        return genre.id === genreId;
      }) || showGenres.find((genre) => {
        return genre.id === genreId;
      })
    })
    const trueNames = genresNames.map((genre) => {
      return genre.name;
    })
    return trueNames;
  }

  const handleSearch = (value) => {
    setSearch(value);
  }


  const renderMedia = () => {
    if (search.length < 1 && mediaToRender.length < 1) {
      return (
        <li>
          <p className="warning_message">Nothing matches your search</p>
        </li>
      )
    }
    else {
      return mediaToRender.map((movie) => {
        return (
          <li id={movie.id} key={movie.id} className="media_list_item">
            <Link className="media_list_item_content" to={`/media/${movie.id}`} title={movie.titleMovie ? movie.titleMovie : movie.titleShow} >
              <img className="media_img" src={movie.imagePath ? imagePath + movie.imagePath : "https://via.placeholder.com/438x657/ff3b3b/000000/?text=TV"} alt={movie.titleMovie ? movie.titleMovie : movie.titleShow} />
              <div className="media_info">
                <h3 className="media_title">{movie.titleMovie ? movie.titleMovie : movie.titleShow}</h3>
              </div>
            </Link>
          </li>
        )
      })
    }

  }

  const renderGenres = (selectedMedia) => {
    if (selectedMedia === 'movies') {
      return movieGenres.map((genre, index) => {
        return (
          <li className="genres_list_item" key={index}>
            <FilterLabel selectedMedia={selectedMedia} genre={genre} handleGenresFilter={handleGenresFilter} />
          </li>
        )
      })
    }
    else if (selectedMedia === 'shows') {
      return showGenres.map((genre, index) => {
        return (
          <li className="genres_list_item" id={index} key={genre.id}>
            <FilterLabel selectedMedia={selectedMedia} genre={genre} handleGenresFilter={handleGenresFilter} />
          </li>
        )
      })
    }
  }

  const handleNextPage = (ev) => {
    pageNumCont = pageNum + 1;
    setPageNum(pageNumCont);
  }

  const handlePrevPage = (ev) => {
    pageNumCont = pageNum - 1;
    setPageNum(pageNumCont);
  }

  const handlePageInput = (value) => {
    setPageNum(value);
  }

  const handleGenresFilter = (value, selectedMedia) => {
    if (selectedMedia === 'movies') {
      setSelectedMovieGenre(value)
    }
    else if (selectedMedia === 'shows') {
      setSelectedShowGenre(value);
    }
  }

  const handleAllMediaLink = () => {
    setPageNum(0);
    setSelectedShowGenre(null);
    setSelectedMovieGenre(null);
    setSelectedMedia('');
  }
  const handleMoviesLink = () => {
    setSelectedMovieGenre('');
    setSelectedShowGenre(null);
    setSelectedMedia('movies');
  }
  const handleTVshowsLink = () => {
    setSelectedShowGenre('');
    setSelectedMovieGenre(null);
    setSelectedMedia('shows');
  }


  const routeData = useMatch('/media/:id');
  const mediaId = routeData !== null ? routeData.params.id : '';
  const clickedMedia = mediaToRender.find((media) => media.id === parseInt(mediaId));

  return (
    <div className="page">
      <Header handleAllMediaLink={handleAllMediaLink} handleMoviesLink={handleMoviesLink} handleTVshowsLink={handleTVshowsLink}></Header>
      <Routes>
        <Route exact path="/" element={<Main renderMedia={renderMedia} handleSearch={handleSearch} loading={loading} pageNum={pageNum} totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} handlePageInput={handlePageInput} handleGenresFilter={handleGenresFilter} />} />
        <Route path="/media/:id" element={<MediaDetails imagePath={imagePath} media={clickedMedia} whatGenre={whatGenre} selectedMedia={selectedMedia} />} />
        <Route exact path="/movies" element={<Media renderGenres={renderGenres} selectedMedia={selectedMedia} renderMedia={renderMedia} handleSearch={handleSearch} loading={loading} pageNum={pageNum} totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} handlePageInput={handlePageInput} handleGenresFilter={handleGenresFilter} />} />
        <Route exact path="/TVshows" element={<Media renderGenres={renderGenres} selectedMedia={selectedMedia} renderMedia={renderMedia} handleSearch={handleSearch} loading={loading} pageNum={pageNum} totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} handlePageInput={handlePageInput} handleGenresFilter={handleGenresFilter} />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;