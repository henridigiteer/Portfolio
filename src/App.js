import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Site from './Layouts/Site';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
