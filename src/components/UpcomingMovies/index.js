import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import MovieCard from '../MovieCard'
import './index.css'

class UpcomingMovies extends Component {
  state = {resultData: '', isLoading: true}

  componentDidMount() {
    this.getUpcomingMovies()
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

  getUpdatedComingMoviesResponse = responseData => {
    const updatedRespose = {
      page: responseData.page,
      results: responseData.results.map(eachObject => ({
        adult: eachObject.adult,
        backgroundPath: eachObject.backdrop_path,
        genreIds: eachObject.genre_ids,
        id: eachObject.id,
        orginalLanguage: eachObject.original_language,
        orginalTitle: eachObject.original_title,
        overview: eachObject.overview,
        popularity: eachObject.popularity,
        posterPath: `https://image.tmdb.org/t/p/w500${eachObject.poster_path}`,
        releaseDate: eachObject.release_date,
        title: eachObject.title,
        video: eachObject.video,
        voteAverage: eachObject.vote_average,
        voteCount: eachObject.vote_count,
      })),
    }
    return updatedRespose
  }

  getUpcomingMovies = async () => {
    const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    const response = await fetch(apiUrl)
    const responseData = await response.json()
    this.setState({
      resultData: this.getUpdatedComingMoviesResponse(responseData),
      isLoading: false,
    })
  }

  renderLoaderSpinner = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTopRatedMoviePosters = () => {
    const {resultData} = this.state
    return (
      <ul className="moviePostersBgContainer">
        {resultData.results.map(eachMovieDetails => (
          <MovieCard
            eachMovieDetails={eachMovieDetails}
            key={eachMovieDetails.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {resultData, isLoading} = this.state

    // this.renderTopRatedMoviePosters()
    return (
      <div className="homeBgContainer">
        <Navbar />
        {isLoading ? (
          <div>{this.renderLoaderSpinner()}</div>
        ) : (
          <div>{this.renderTopRatedMoviePosters()}</div>
        )}
      </div>
    )
  }
}

export default UpcomingMovies
