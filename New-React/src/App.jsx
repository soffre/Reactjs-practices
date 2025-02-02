import './App.css'
import Header from './components/Header'
import Examples from './components/Exapmles'
import  CoreConcepts from './components/CoreConcepts'
function App() {
  
  return (
    <>
      <Header />
      <main className='mt-8 flex flex-col gap-8'>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  )
}

export default App
