import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <div>
        <section className='pb-5'>
            <div className='container pt-5'>
                <div className='row pb-5 pt-5'>
                    <h3 className='text-center pb-5'>Projects</h3>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box d-flex justify-content-center align-items-center'>
                        <div class="stack">
                          <div class="card cardsam">
                            <div class="image">
                            <img style={{height:"100%",width:"100%"}} className='border' src="ecom-logo.png" alt="images"/>
                            </div>
                            <a className='proj-link' href='https://asamad-chairy-ecommerce.netlify.app'><span>view Projects</span></a>
                          </div>
                      </div>
                      </div>
                   </div>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box d-flex justify-content-center align-items-center'>
                        <div class="stack">
                          <div class="card cardsam">
                            <div class="image">
                            <img style={{height:"100%",width:"100%"}} className='border' src="stack-img" alt="images"/>
                            </div>
                            <a className='proj-link' href='https://asamad-stack.netlify.app'><span>view Projects</span></a>
                          </div>
                      </div>
                      </div>
                   </div>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box d-flex justify-content-center align-items-center'>
                        <div class="stack">
                          <div class="card cardsam">
                            <div class="image">
                            <img style={{height:"100%",width:"100%"}} className='border' src="seedkaro-img.jpg" alt="images"/>
                            </div>
                            <a className='proj-link' href='https://asamad-seedkaro.netlify.app'><span>view Projects</span></a>
                          </div>
                      </div>
                      </div>
                   </div>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box d-flex justify-content-center align-items-center '>
                        <div class="stack">
                          <div class="card cardsam">
                            <div class="image">
                            <img style={{height:"100%",width:"100%"}} className='border' src="netflix-logo.jpg" alt="images"/>
                            </div>
                            <a className='proj-link' href=''><span>view Projects</span></a>
                          </div>
                      </div>
                      </div>
                   </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Projects