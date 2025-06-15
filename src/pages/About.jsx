import React from 'react'

const NAV_HEIGHT = 88; // px
const About = () => {
  return (
    <div style={{ minHeight: `calc(100vh - ${NAV_HEIGHT}px)`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h1>About</h1>
    </div>
  )
}

export default About; 