import { useEffect, useState } from "react"
import axios from 'axios'
import { Container } from '@mui/material';
import Header from "./components/Header/Header";



function App() {

  const [meaning,setMeaning] = useState([])
  const [word,setWord] = useState("")
  
  const fetchData = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/incessant')
    
      setMeaning(data.data[0].meanings[0].definitions[0].definition)
      
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div 
      className="App"
      style={{
        height: "100vh",
        backgroundColor:  "#282c34",
        color:'white'
      }}
    >
      <Container 
        maxWidth='md'
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header/>
      </Container>

    </div>
  )
}

export default App
