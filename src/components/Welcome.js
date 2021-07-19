import React from 'react'

export const Welcome = () => {
    return (
        <div>
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Pedro Arce</span><br /> FrontEnd Dev</h1>

                    <a href="mailto:pedro_arce@outlook.com "  className="button">Contact</a>
                    
                </div>

                <div className="home__social">
                    <a href="www.linkedin.com/in/pedro-arce-graveshound" target="_blank" rel="noreferrer" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/graveshound" target="_blank" rel="noreferrer" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                    <a href="mailto:pedro_arce@outlook.com " className="home__social-icon"><i className='bx bx-mail-send' ></i></a>
                </div>

                <div className="home__img">    
                    <img src="assets/img/profile.jpg" alt="profile" />
                </div>
            </section>
        </div>
    )
}
