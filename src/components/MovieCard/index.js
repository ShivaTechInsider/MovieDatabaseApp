import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class MovieCard extends Component {
  render() {
    const {eachMovieDetails} = this.props
    const {id, title, posterPath, popularity, voteAverage} = eachMovieDetails
    return (
      <li className="movieCardBgContainer">
        <img src={posterPath} alt={title} className="posterImageStyle" />
        <div className="contentContainer">
          <h1 className="movieName">{title}</h1>
          <p className="movieRating">Rating: {voteAverage}</p>
          <Link to={`/singleMovie/${id}`}>
            <button className="viewDetailsBtn">View Details</button>
          </Link>
        </div>
      </li>
    )
  }
}

export default MovieCard
