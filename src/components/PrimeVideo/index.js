/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const comedyMovieList = moviesList.filter(
    comedy => comedy.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-container">
        <h1 className="movies-heading"> Action Movies </h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 classNames="movies-heading"> Comedy Movies </h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
