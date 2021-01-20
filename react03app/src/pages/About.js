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
          <img src={'/img/JPolzin_4.jpg'} alt="me" width="250"/><br/>
          <p class="mt-1">
            Software Integration Engineer, Dipl. Informatiker HF<br/>
            <a href="mailto:jpomv2@icloud.com">jpomv2@icloud.com</a><br/>
            +41 79 251 39 80
          </p>
        </div>
      </div>
      <div class="col">
        <div class="card bg-success text-white text-center p-1">
          <strong>Systemtechnik</strong>
        </div>
      </div>
      <div class="col">
        <div class="card bg-primary text-white text-center p-1">
          <strong>DevOps</strong>
        </div>
      </div>
      <div class="col">
        <div class="card bg-warning text-white text-center p-1">
          <strong>Applikationsentwicklung</strong>
        </div>
      </div>
    </div>
  </div>
)

export default About