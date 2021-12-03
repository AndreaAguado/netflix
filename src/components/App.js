import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
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
          <a className="media_list_item_content" href="·" title={movie.titleMovie ? movie.titleMovie : movie.titleShow} target="_blank" rel="noreferrer">
            <img className="media_img" src={imagePath + movie.imagePath} alt={movie.titleMovie ? movie.titleMovie : movie.titleShow} />
            <h3 className="media_title">{movie.titleMovie ? movie.titleMovie : movie.titleShow}</h3>
          </a>
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
          <Main renderMedia={renderMedia}></Main>
          <Footer></Footer>
        </Route>
        <Route path="/media/:id">
          Peli
        </Route>
      </Switch>
    </div>
  );
};

export default App;