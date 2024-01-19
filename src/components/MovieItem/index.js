/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import './index.css'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {moviesDetails} = props
  const {thumbnailUrl, videoUrl} = moviesDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls className="video" />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
