import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div>
        <div className='container pb-5 pt-5'>
            <div className='row pt-5'>
                <h3 className='text-center'>Experience</h3>
                <div className='col-md-12 pt-5'>
                    <div class="timeline">
                    <h2 class="timeline__item timeline__item--year">2003</h2>
                    <div class="timeline__item">
                        <h3 class="timeline__title">Born</h3>
                    </div>
                    <h2 class="timeline__item timeline__item--year">2019</h2>
                    <div class="timeline__item">
                        <h3 class="timeline__title">Graduated High School</h3>
                    </div>               
                    <h2 class="timeline__item timeline__item--year">2020</h2>
                    <div class="timeline__item">
                        <h3 class="timeline__title">Started at Diploma Information Technology College (Vidyalankar Polytechnic) in an IT department</h3>
                    </div>
                 </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Experience