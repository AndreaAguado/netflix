import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import callToApi from '../services/callToApi';
const App = () => {
  const [imagePath, setiImagePath] = useState('');
  useEffect(() => {
    callToApi.getConfiguration().then(response => {
      setiImagePath(response);
      console.log(response);
    });
  }, []);
  useEffect(() => {
    callToApi.getTrendingMedia().then(response => {
      console.log(response);
    });
  }, []);
  return (
    <div className="page">
      <Header></Header>
      <main>
        Buscar
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;