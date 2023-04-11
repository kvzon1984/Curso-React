import logo from './logo.svg';
import './App.css';
import ComponenteClass from './components/ComponenteClase';
import ComponenteFuncion from './components/ComponenteFuncional';
import Propiedades from './components/PropiedadesProps';
import Estado from './components/Estados';
import RenderizadoCondicional from './components/RenderiazadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import {Padre} from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVidaComponentes';
import AjaxApis from './components/PeticionAsincronicaAjaxApi';
import HooksContador from './components/HooksUseStateContador';
import HooksScroll from './components/HooksUseEfectScroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
      <img src={logo} className="App-logo" alt="logo" />
      </section>
      <section>
        <ComponenteClass msg="Componente de clase"/>
        <hr/>
        <ComponenteFuncion msg="Componente de funcion"/>
        <hr/>
        <Propiedades 
        cadena="Esto es una cadena de texto"
        numero={25}
        boolean={true}
        arreglo={[1,2,3,4,5]}
        objeto={{'nombre':'Isaac Vega', 'edad': 38, 'nacionalidad': 'Chilena'}}
        elementoReact={<i>elemento react</i>}
        funcion = {(num) => num * num}
        componenteReact = {<ComponenteClass msg="Soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <Padre/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <HooksContador titulo= "funciones"/>
        <hr/>
        <HooksScroll/>
        <hr/>
      </section>
      
      </header>
    </div>
  );
}

export default App;
