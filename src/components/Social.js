import React from 'react'
import './Social.css'

function Social() {
  return (
    <div>
        <section style={{backgroundColor:"#1f1f1f"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                    <div class="wrap">
                        <div class="social">
                           <i class="fa-brands fa-github git icons"></i>
                           <i class="fa-brands fa-instagram insta icons"></i>
                        </div>
                        <p className='text-center text-white fs-5 pt-3 copyright'>Copyright © Abdus Samad</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Social