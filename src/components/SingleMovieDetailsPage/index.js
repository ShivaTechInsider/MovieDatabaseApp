import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import MovieCard from '../MovieCard'
import './index.css'

class SingleMovieDetailsPage extends Component {
  state = {resultData: '', isLoading: true}

  componentDidMount() {
    this.getSingleMovieDetails()
  }

  // adult: false
  // backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
  // genre_ids: (3) [28, 35, 878]
  // id: 533535
  // original_language: "en"
  // original_title: "Deadpool & Wolverine"
  // overview:"A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine."
  // popularity: 5464.692
  // poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
  // release_date: "2024-07-24"
  // title: "Deadpool & Wolverine"
  // video: false
  // vote_average: 7.764
  // vote_count: 2418

  getUpdatedSingleMovieResponse = responseData => {
    const updatedRespose = {
      adult: responseData.adult,
      backgroundPath: responseData.backdrop_path,
      id: responseData.id,
      orginalLanguage: responseData.original_language,
      orginalTitle: responseData.original_title,
      overview: responseData.overview,
      popularity: responseData.popularity,
      posterPath: `https://image.tmdb.org/t/p/w500${responseData.poster_path}`,
      releaseDate: responseData.release_date,
      title: responseData.title,
      video: responseData.video,
      voteAverage: responseData.vote_average,
      voteCount: responseData.vote_count,
    }
    return updatedRespose
  }

  getSingleMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-`
    const response = await fetch(apiUrl)
    const responseData = await response.json()
    this.setState({
      resultData: this.getUpdatedSingleMovieResponse(responseData),
      isLoading: false,
    })
  }

  renderLoaderSpinner = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSinleMoviePoster = () => {
    const {resultData} = this.state
    const {
      adult,
      backgroundPath,
      id,
      title,
      orginalLanguage,
      orginalTitle,
      overview,
      popularity,
      posterPath,
      releaseDate,
      voteAverage,
      voteCount,
    } = resultData
    return (
      <div className="singleMoviePosterBgContainer">
        <img src={posterPath} alt={title} className="posterStyle" />
        <h1 className="titleHeading">{title}</h1>
        <p className="rating">Rating: {popularity}</p>
        <p className="para">{overview}</p>
        <p className="voteAverage">{voteAverage}</p>
        <p className="voteCount">{voteCount}</p>
        <p className="releaseDate">{releaseDate}</p>
      </div>
    )
  }

  render() {
    const {resultData, isLoading} = this.state

    // this.renderSinleMoviePoster()
    return (
      <div className="homeBgContainer">
        <Navbar />
        {isLoading ? (
          <div>{this.renderLoaderSpinner()}</div>
        ) : (
          <div>{this.renderSinleMoviePoster()}</div>
        )}
      </div>
    )
  }
}

export default SingleMovieDetailsPage
