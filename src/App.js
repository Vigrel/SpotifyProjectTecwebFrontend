import Mood from "./components/Mood/forms";
import Features from "./components/Mood/features";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App">
        <Routes>
          <Route path='' element={<Mood />} />
          <Route path='api/moods/:id' element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// function Home() {
//   const [frase, setFrase] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const responseToken = await axios.get("https://enigmatic-bayou-56424.herokuapp.com/franciscoabvc/token");
//       const response = await axios.post("https://enigmatic-bayou-56424.herokuapp.com/franciscoabvc/message", { token: responseToken.data.token })

//       setFrase(response.data.mensagem);
//     };

//     fetchData()
//   }, [])

