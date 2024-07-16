import { useEffect, useState } from "react"
import axios from 'axios'
import { Container } from '@mui/material';
import Header from "./components/Header/Header";
import Definition from "./components/Definitions/Definition";



function App() {

  const [meaning,setMeaning] = useState([])
  const [word,setWord] = useState("")
  const [category,setCategory] = useState("en")
  
  const fetchData = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setMeaning(data.data)
      console.log(meaning)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[word,category])

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
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
        {
          meaning && <Definition word={word} category={category} meanings={meaning}/>
        }
      </Container>

    </div>
  )
}

export default App
