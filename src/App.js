import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import Chica from './assets/Chica.png'
import { TercerComponente } from './componentes/TercerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recursos Humanos</h1>
        <p>En este módulo usted podrá realizar la gestión de recursos humanos de Bregma</p>

        <img src={Chica} className="App-Chica"></img>
      </header>

      <PrimerComponente/>
      
      <SegundoComponente/>

     <TercerComponente/>
      
    </div>
  );
}

export default App;
