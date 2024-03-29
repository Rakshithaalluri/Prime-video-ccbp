import Slider from 'react-slick'
// eslint-disable-next-line import/no-unresolved
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(eachMovie => (
            <MovieItem moviesDetails={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider
