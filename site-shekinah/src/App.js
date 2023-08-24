import './App.css';

import Menu from './Components/Menu/menu'
import Banner from './Components/Banner/banner';
import Eventos from './Components/Eventos/eventos';
import Membros from './Components/Membros/membros';
import Midia from './Components/Midia/midia';

import dados from './data-mock/dados.json';

function App() {
  return (
    <div className="app">
      <Menu></Menu>
      <Banner></Banner>
      <Eventos agenda={dados.agenda}></Eventos>
      <Membros membros={dados.membros}></Membros>
      <Midia midias={dados.midias}></Midia>
    </div>
  );
}

export default App;