import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import CareType from "./pages/CareType";
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/careType" element={<CareType />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}



export default App
