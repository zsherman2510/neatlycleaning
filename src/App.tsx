import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import CareType from "./pages/CareType";
import Tasks from "./pages/Tasks";
import Creds from "./pages/Creds";
import FindCare from "./pages/FindCare";
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/careType" element={<CareType />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/user" element={<Creds />} />
              <Route path="/findCare" element={<FindCare />}/>
            </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
    
  );
}



export default App
