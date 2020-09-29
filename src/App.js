import React from 'react';
import { Route, Switch ,Redirect} from "react-router-dom";
import Navbar from './components/Navbar';
import Tab from './components/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
    
     
      <Navbar/>
      <Switch>
        <Route exact path="/hi" component={()=><Tab language={'hi'} />}/>  
        <Route exact path="/en" component={()=><Tab language={'en'}/>} />
        <Route exact path="/fr" component={()=><Tab language={'fr'}/>} />
      
      </Switch>
      
    </div>
  );
}




export default App;
