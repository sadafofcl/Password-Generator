import './App.css'
import Features from './components/Features'
import PasswordInputCopy from './components/PasswordInputCopy'
import PasswordControls from './components/PasswordControls'
import useCustomHook from './hooks/useCustomHook'
import Footer from './components/Footer'
import Header from './components/Header'
import { features, links } from './constants'

function App() {
  const {
    length,
    setLength,
    numbersAllowed, 
    setNumbersAllowed,
    charSymbolAllowed,
    setCharSymbolAllowed,
    password,
    setPassword,
  } = useCustomHook();

  return (
    <>
        <Header/>
        <div className="my-6">
          <PasswordInputCopy password={password} clearPassword={() => setPassword("")}/>
        </div>
        <div className="my-6">
          <PasswordControls 
            length={length}
            setLength={setLength}
            numbersAllowed={numbersAllowed}
            setNumbersAllowed={setNumbersAllowed}
            charSymbolAllowed={charSymbolAllowed}
            setCharSymbolAllowed={setCharSymbolAllowed}
          />
        </div>
        <Features features={features}/>
        <Footer links={links}/>
        
        
    </>
  )
}

export default App
