import './App.css';

import {useState} from 'react'

import Menu from './Components/Menu/menu'
import Banner from './Components/Banner/banner';
import Eventos from './Components/Eventos/eventos';

import dados from './data-mock/dados.json';

function App() {
  const [data, setData] = useState(dados);
  
  return (
    <div className="app">
      <Menu></Menu>
      <Banner></Banner>
      <Eventos agenda={data.agenda}></Eventos>
    </div>
  );
}

export default App;
