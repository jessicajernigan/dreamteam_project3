import React from 'react'

import './VibeBtn.css'

const VibeBtn = ({vibe}) => {
  return (
    <button className="btn-save btn btn-primary btn-sm nav-link" href="/">
    {vibe.name}
  </button>
  )
}

export default VibeBtn