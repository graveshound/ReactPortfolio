import React from 'react'

export const Download = () => {

   

    return (
        <section className="contact section" >
                <h2 className="section-title">Curriculum</h2>
                         <i id='download' className='download__element bx bxs-file-pdf'></i>
                         
                        <a type="button" href="./assets/pedroarcecv.pdf"  download id='dl' className="download__element download__button button" rel="noreferrer">Download CV</a> 
                
            </section>
    )
}
