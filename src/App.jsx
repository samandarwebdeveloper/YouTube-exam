import "./App.scss";

import { Switch, Route } from "react-router";

// components
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Channel from "./Components/Channel/Channel";
import VideoPage from "./Components/Video/Video";


function App() {
  
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact><Sidebar /><Header /><Home /></Route>
        <Route path="/channel"><Sidebar /><Header /><Channel /></Route>
        <Route path="/video"><Header /><VideoPage/></Route>
        <Route><h1 style={{ backgroundColor:"white", textAlign:"center" }}>Page not found</h1></Route>
      </Switch>
    </div>
  );
}

export default App;
