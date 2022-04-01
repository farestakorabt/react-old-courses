import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./components/Context";
import Header from "./components/interface/Header";
import List from "./components/contacts/List";
import AddContact from "./components/contacts/AddContact";
import { Routes, Route } from "react-router-dom";
import APropos from "./components/pages/APropos";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container"></div>
      </div>
      <Routes>
        <Route path="/ajouter" element={<AddContact />} />
        <Route path="/List" element={<List />} />
        <Route path="/" element={<List />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Provider>
  );
}

export default App;
