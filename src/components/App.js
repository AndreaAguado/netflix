import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import callToApi from '../services/callToApi';
const App = () => {
  const [imagePath, setiImagePath] = useState('');
  const [mediaToRender, setMediaToRender] = useState([]);
  useEffect(() => {
    callToApi.getConfiguration().then(response => {
      setiImagePath(response);
      console.log(response);
    });
  }, []);
  useEffect(() => {
    callToApi.getTrendingMedia().then(response => {
      setMediaToRender(response);
      console.log(response);
    });
  }, []);

  const renderMedia = () => {
    return mediaToRender.map((movie, key) => {
      return (
        <li key={key} className="media_list_item">
          <a href="·" title={movie.titleMovie ? movie.titleMovie : movie.titleShow} target="_blank" rel="noreferrer">
            <img className="media_img" src={imagePath + movie.imagePath} alt={movie.titleMovie ? movie.titleMovie : movie.titleShow} />
            <h3 className="media_title">{movie.titleMovie ? movie.titleMovie : movie.titleShow}</h3>
          </a>
        </li>
      )
    })
  }

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        Buscar
        <ul className="media_list">
          {renderMedia()}
        </ul>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;