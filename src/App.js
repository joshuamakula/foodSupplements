import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import CustomerOnboardingForm from './components/CustomerOnboardingForm ';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/onboarding' element={<CustomerOnboardingForm />} />
          <Route path='/admin' element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
