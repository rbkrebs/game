import './App.css';
import Game from '../src/componentes/Game/Game';
import { useSelector } from 'react-redux';
import VLibras from "@djpfs/react-vlibras";

function App() {

  const store = useSelector(state => state);

 
  return (
    <div className="App">
      <VLibras />
      <Game questao = {store.data.questoes}/> 
    </div>
  );
}

export default App;
