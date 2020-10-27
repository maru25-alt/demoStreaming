import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './page/Home';
import Series from './page/Series';
import Movies from './page/Movies';


function App() {
  return (
   <Router>
     
       <Switch>
          <Route path="/movies">
             <Header title="Movies"/>
            <Movies />
          </Route>
          <Route path="/series">
            <Header title="Series"/>
            <Series />
          </Route>
         
          <Route exact path="/">
            <Header  title="Titles"/>
            <Home />
          </Route>
        </Switch>
        <Footer/>
   </Router>
  );
}

export default App;
