import React from 'react'
import './About.css';

function About(props) {
  return (
    <div className={`about bg-${props.mode === "light"? "dark-mode": "light-mode"}`}>
        <section className='pb-5'>
            <div className='container d-flex-justify-content-center align-items-center pt-5'>
                <div className='row center'>
                    <h3 className="text-center pb-5 pt-5">About</h3>
                    <div className='col-md-2 mt-5 d-flex justify-content-center align-items-center'>
                    <div class="card cardsam1 mb-5" style={{width:"18rem"}}>
                        <div class='card-body'>
                        <img src="about-img.png" style={{padding:"6%"}} class="card-img-top border border-tertiary" alt="..."/>
                        </div>
                        <div class="card-body">
                            <p class="card-text crd-p ms-2 ps-2">
                                <i class="fa-brands fa-react px-2 fs-3 text-info"></i>
                                <i class="fa-brands fa-js px-2 text-warning fs-3"></i>
                                <i class="fa-brands fa-html5 px-2 text-danger fs-3 "></i>
                            </p>
                        </div>
                     </div>
                    </div>
                    <div className='col-sm-10 d-flex justify-content-end align-items-center'>
                        <div className='col-sm-10'>
                        <div class="card cardsam2">
                            <div class="card-header">
                                <svg  width={"1em"} height={"1em"} viewBox='1 1 1'>
                                <circle cx="5" cy="5" r="5" fill="#ed4c5c"></circle>
                                </svg>
                                <svg  width={"1em"} height={"1em"} viewBox='1 1 1'>
                                <circle cx="5" cy="5" r="5" fill="#FDCB58"></circle>
                                </svg>
                                <svg  width={"1em"} height={"1em"} viewBox='1 1 1'>
                                <circle cx="5" cy="5" r="5" fill="#78B159"></circle>
                                </svg>
                            </div>
                            <div class="card-body">
                            <span class="wave fs-3 ps-4">Hi :) </span>
                                <p class="card-text ps-4 pt-3">👋 I'm Abdus Samad. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜</p>
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

export default About