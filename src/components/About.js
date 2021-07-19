import React from 'react'

export const About = () => {

    const text=`Systems engineer, passionate about web development, especially frontend development and user experience design.
    Always looking for new challenges and opportunities to grow as a professional.`
     const texta=`In the FrontEnd development area, I have experience in HTML, CSS, JavaScript and multiple frameworks derived from these, such as React and Angular, I also have knowledge about backend development, relational databases such as MySQL and non-relational databases such as MongoDB, Firebase and CouchDB, AWS services such as S3 and CloudFront.
    `;
    const textb=`I am always in constant search to learn new related technologies that allow me to create better solutions and products.`
    return (
        <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="assets/img/me.jpg" alt="" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I am Pedro</h2>
                        <p className="about__text">
                            {text}<br/>{texta}<br/>{textb}</p>           
                    </div>                                   
                </div>
                
            </section>
    )
}
