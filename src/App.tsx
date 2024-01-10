import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./pages/CustomerFlow/SignUp";
import CareType from "./pages/CustomerFlow/CareType";
import Tasks from "./pages/CustomerFlow/CareDetails";
import Creds from "./pages/CustomerFlow/Creds";
import FindCare from "./pages/CustomerFlow/FindCare";
import Login from "./pages/CustomerFlow/Login";
import CleanerDetails from "./pages/CleanerFlow/CleanerDetails";
import CleanerExperience from "./pages/CleanerFlow/CleanerExp";
import CreateProfile from "./pages/CleanerFlow/CreateProfile";
import CleanerCreds from "./pages/CleanerFlow/CleanerCreds";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import PropertyDetails from "./pages/CustomerFlow/PropertyDetail";

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
            <Route path="/dashboard" element={<FindCare />} />
            <Route path="/properties" element={<PropertyDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<CleanerDetails />} />
            <Route path="/experience" element={<CleanerExperience />} />
            <Route path="/profile" element={<CreateProfile />} />
            <Route path="/cleanerCreds" element={<CleanerCreds />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
