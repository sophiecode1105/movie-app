import{Route, Switch,Link} from "react-router-dom"
import './App.css';
import Home from './routes/Home.js'
import Detail from './routes/Detail.js'

function App() {
  return (
    <>
       <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path = "/detail">
          <Detail />
        </Route>
      </Switch>
    </>
  )
}

export default App;
