import Header from './components/Cabecalho/Cabecalho'
import Hero from './components/Hero/Hero'
import ListaVagas from './containers/ListaVagas/ListaVagas'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
