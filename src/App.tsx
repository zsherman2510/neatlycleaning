import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<SignUp />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}



export default App
