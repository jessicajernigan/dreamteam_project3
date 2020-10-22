import React from 'react'

const VibeBtn = ({vibe}) => {
  return (
    <a className="nav-link" href="/">
    {vibe.name}
  </a>
  )
}

export default VibeBtn
