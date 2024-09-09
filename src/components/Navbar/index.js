import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navBgContainer">
        <div className="movieDbBg">
          <h1 className="movieDbHeading">movieDB</h1>
        </div>
        <ul className="btnsListContainer">
          <li className="movieTypeListItem">
            <Link to="/">
              <button className="movieTypeBtn">Popular</button>
            </Link>
          </li>
          <li className="movieTypeListItem">
            <Link to="/top-rated">
              <button className="movieTypeBtn">Top Rated</button>
            </Link>
          </li>
          <li className="movieTypeListItem">
            <Link to="/upcoming">
              <button className="movieTypeBtn">Upcoming</button>
            </Link>
          </li>
        </ul>

        <div className="searchBgConatiner">
          <input
            type="search"
            className="searchInputStyle"
            placeholder="Search"
          />
          <button>Search</button>
        </div>
      </nav>
    )
  }
}

export default Navbar
