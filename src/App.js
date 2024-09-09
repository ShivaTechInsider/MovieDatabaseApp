import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import SingleMovieDetailsPage from './components/SingleMovieDetailsPage'
import './App.css'

// write your code here
const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/top-rated" exact component={TopRatedMovies} />
      <Route path="/upcoming" exact component={UpcomingMovies} />
      <Route path="/singleMovie/:id" exact component={SingleMovieDetailsPage} />
    </Switch>
  </div>
)

export default App
