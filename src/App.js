import './styles/App.css';
import Context from './context/Context';
import useContext from './context/useContext';
import { Nav } from './components/Nav';
import { Body } from './components/Body';

function App() {
  const initialState = useContext()

  return (
    <Context.Provider value={initialState}>
      <section className='section--container'>
        <Nav></Nav>
        <Body></Body>
      </section>
    </Context.Provider>
  );
} 

export default App;
