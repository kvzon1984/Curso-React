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
import RelojHooks from './components/HooksReloj';
import HooksAjaxApi from './components/HooksAjaxApi';
import HooksPersonalizados from './components/HooksPersonalizados';
import Style from './components/PasandoStyles';
import ReutilizandoComponentes from './components/ReutilizadoComponentes';
import HookUseReducer from './components/HookUseReducer';
import HookUseRef from './components/HookUseRef';
import ComponenteNoControladosFrom from './components/FormularioGetDataNoControlado';
import ComponenteNoControladosFrom2 from './components/FormularioGetDataNoControlado2';
import ComponenteNoControladosFrom3 from './components/FormularioGetDataNoControlado3';
import ComponentesControladosFrom from './components/FormularioGetDataControlados';
import FormikUsandoHooks from './components/FormikUsandoHooks';
import FormikUsandoComponentes from './components/FormikUsandoComponentes';

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
          <RelojHooks/>
          <hr/>
          <HooksAjaxApi/>
          <hr/>
          <HooksPersonalizados/>
          <hr/>
          <Style/>
          <hr/>
          <ReutilizandoComponentes/>
          <hr/>
          <HookUseReducer/>
          <hr/>
          <HookUseRef/>
          <hr/>
          <ComponenteNoControladosFrom/>
          <hr/>
          <ComponenteNoControladosFrom2/>
          <hr/>
          <ComponenteNoControladosFrom3/>
          <hr/>
          <ComponentesControladosFrom/>
          <hr/>
          <FormikUsandoHooks/>
          <hr/>
          <FormikUsandoComponentes/>
          <hr/>
        </section>
      </header>
    </div>
  );
}

export default App;
