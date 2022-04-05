import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
} from "react-router-dom";
  
// import Home component
import Home from "./camponants/Home";
// import About component
import About from "./camponants/About";
// import ContactUs component

  
function App() {
  return (
    <>
   <button>Click me!</button>
   <input type="text" />
      <Router>
        <HashRouter>
          
          <Route exact path="./home" component={Home} />
            
        
          <Route path="./about" component={About} />
       
          <NavLink to="/" />
        </HashRouter>
      </Router>
    </>
  );
}
  
export default App;



