import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const EmbedsElement = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hpDQeHu1hW8" allowfullscreen>
      </iframe>
    </div>
  )
}

export default EmbedsElement;