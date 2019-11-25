import React from 'react'

const About = () => (
  <div>
    {/* First Row 1 column */}
    <div class="row">
      <div class="col">
        <h3>About me</h3>
      </div>
    </div>

    {/* Second Row 4 columns */}
    <div class="row mt-3">
      <div class="col">
        <div class="card bg-light p-1">
          Empty card
        </div>
      </div>
      <div class="col">
        <div class="card bg-success text-white text-center p-1">
          col 2 
        </div>
      </div>
      <div class="col">
        <div class="card bg-primary text-white text-center p-1">
          col 3
        </div>
      </div>
      <div class="col">
        <div class="card bg-warning text-white text-center p-1">
          col 4
        </div>
      </div>
    </div>
  </div>
)

export default About