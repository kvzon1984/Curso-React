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
import HooksContador from './components/HookExplicacion/HooksUseStateContador';
import HooksScroll from './components/HookExplicacion/HooksUseEfectScroll';
import RelojHooks from './components/HookExplicacion/HooksReloj';
import HooksAjaxApi from './components/HookExplicacion/HooksAjaxApi';
import HooksPersonalizados from './components/HookExplicacion/HooksPersonalizados';
import Style from './components/PasandoStyles';
import ReutilizandoComponentes from './components/ReutilizadoComponentes';
import HookUseReducer from './components/HookExplicacion/HookUseReducer';
import HookUseRef from './components/HookExplicacion/HookUseRef';
import ComponenteNoControladosFrom from './components/FormularioGetDataNoControlado';
import ComponenteNoControladosFrom2 from './components/FormularioGetDataNoControlado2';
import ComponenteNoControladosFrom3 from './components/FormularioGetDataNoControlado3';
import ComponentesControladosFrom from './components/FormularioGetDataControlados';
import FormikUsandoHooks from './components/FormikExplicacion/FormikUsandoHooks';
import FormikUsandoComponentes from './components/FormikExplicacion/FormikUsandoComponentes';
import Styled from './components/StyledComponentExplicacion/Styled';
import Content from './components/Contexto/Context';
import ActualizandoContext from './components/Contexto/ActualizandoContext';
import ProblemaContext from './components/Contexto/Problemas';
import UsarContextComponenteClase from './components/Contexto/Class-context';
import ReactRouter from './components/ReactRouter/ReactRouter';
import Redux from './components/Redux/Redux';
import IncrementarDecrementarRedux from './components/Redux/IncrementarDecrementar';
import IntegrandoReduxReact from './components/Redux/IntegrandoReduxAReact';
import ListaTareasReduxReact from './components/Redux/ListaTareas';


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
          <Styled/>
          <hr/>
          <Content/>
          <hr/>
          <ActualizandoContext/>
          <hr/>
          <ProblemaContext/>
          <hr/>
          <UsarContextComponenteClase/>
          <hr/>
          <ReactRouter/>
          <hr/>
          <Redux/>
          <hr/>
          <IncrementarDecrementarRedux/>
          <hr/>
          <IntegrandoReduxReact/>
          <hr/>
          <ListaTareasReduxReact/>
          <hr/>
        </section>
      </header>
    </div>
  );
}

export default App;
