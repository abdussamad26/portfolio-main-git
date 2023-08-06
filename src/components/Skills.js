import React from 'react'
import './Skills.css';

function Skills() {
  return (
    <div>
        <section className='skills text-white pb-5'>
            <div className='container pb-5 pt-4'>
                <div className='row pb-5 pt-5'>
                    <h3 className='text-center'>Skills</h3>
                    <div className='d-flex justify-content-center align-items-center pt-5 text-white'>
                        <div className='skill-div pt-3 text-center'>
                         <i class="fa-brands fa-html5 fs-2"></i>
                        <p>HTML 5</p>
                        </div>
                        <div className='skill-div pt-3 text-center'>
                         <i class="fa-brands fa-css3-alt fs-2"></i>
                        <p>CSS 3</p>
                        </div>
                        <div className='skill-div pt-3 text-center'>
                        <i class="fa-brands fa-js fs-2"></i>
                        <p>Javascript</p>
                        </div>
                        <div className='skill-div pt-3 text-center'>
                        <i class="fa-brands fa-bootstrap fs-2"></i>
                        <p>Bootstrap</p>
                        </div>
                        <div className='skill-div pt-3 text-center'>
                        <i class="fa-brands fa-react fs-2"></i>
                        <p>React</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills