import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Homee from './components/Homee';
import Download from './components/Download';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Social from './components/Social';
import {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";




function App() {
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  const [mode, setMode] = useState('light');
  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  // const [mode, setmode] = useState("light");
  // const toggleMode = () => {
  //   if (mode) {
  //     setmode("dark")
  //     document.body.style.backgroundColor ='#494949';
  //   } else {
  //     setmode("light")
  //     document.body.style.backgroundColor ='dark';
  //   }
  // }

  return (
    <div  className={`App ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
      {
        loading?
        <ClipLoader className='spinner'
        color={"black"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div>
        <Header></Header>
        <Homee toggleMode={toggleMode}></Homee>
        <Download></Download>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Experience></Experience>
        <Social></Social>
      </div>
      }
     
    </div>
  );
}



export default App;
