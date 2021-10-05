
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './component/Services/Services';
import Aboutus from './component/Aboutus/Aboutus';
import Testimonials from './component/Testimonials/Testimonials';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      
      <Switch>
      <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/aboutus'>
          <Aboutus></Aboutus>
        </Route>
        <Route path='/testimonials'>
          <Testimonials></Testimonials>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
