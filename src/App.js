import './App.css';
import Game from '../src/componentes/Game/Game';
import { useSelector } from 'react-redux';


function App() {

  const store = useSelector(state => state);

 
  return (
    <div className="App">
     
      <Game questao = {store.data.questoes}/> 
    </div>
  );
}

export default App;
