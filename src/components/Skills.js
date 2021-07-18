import React from 'react'

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <i className='bx bxl-css3 skills__icon'></i>
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">HTML5</span>
                                /
                                <span className="skills__name">CSS3</span>
                                /
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__trio">

                            </div>
                            <div>
                                <span className="skills__percentage">90%</span>
                            </div>
                        </div>
                        
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-react skills__icon'></i>
                                <span className="skills__name">REACT</span>
                            </div>
                            <div className="skills__bar skills__react">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-angular skills__icon'></i>
                                <span className="skills__name">Angular</span>
                            </div>
                            <div className="skills__bar skills__angular">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">UX/UI</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">55%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-nodejs skills__icon'></i>
                                <span className="skills__name">NODEJS</span>
                            </div>
                            <div className="skills__bar skills__node">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-data skills__icon'></i>
                                <span className="skills__name">DATABASES - MONGODB - SQL</span>
                            </div>
                            <div className="skills__bar skills__database">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div>              
                        <img src="assets/img/work.jpg" alt="" className="skills__img" />
                    </div>
                </div>
                <br />
            </section>

    )
}
