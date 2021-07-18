import React, { useState } from 'react';


export const Header = () => {

  
    const [clicked, setClicked] = useState({
        home:true,
        about:false,
        skills:false,
        work:false,
        download: false
    });



    return (
        <header className="l-header">
        <nav className="nav bd-grid">
            <div>
                <a href="/#" className="nav__logo">Pedro</a>
            </div>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" 
                        className={`nav__link ${clicked.home && 'active'}`}
                        onClick={ ()=>setClicked({
                            home:true,
                            about:false,
                            skills:false,
                            work:false,
                            download: false
                        })}>
                        Home
                        </a>
                        </li>

                    <li className="nav__item"><a href="#about" className={`nav__link ${clicked.about && 'active'}`}
                        onClick={ ()=>setClicked({
                            home:false,
                            about:true,
                            skills:false,
                            work:false,
                            download: false
                        })}>About</a></li>
                    <li className="nav__item"><a href="#skills" className={`nav__link ${clicked.skills && 'active'}`}
                        onClick={ ()=>setClicked({
                            home:false,
                            about:false,
                            skills:true,
                            work:false,
                            download: false
                        })}>Skills</a></li>
                    <li className="nav__item"><a href="#work" className={`nav__link ${clicked.work && 'active'}`}
                        onClick={ ()=>setClicked({
                            home:false,
                            about:false,
                            skills:false,
                            work:true,
                            download: false
                        })}>Work</a></li>
                    <li className="nav__item"><a href="#download" className={`nav__link ${clicked.download && 'active'}`}
                        onClick={ ()=>setClicked({
                            home:false,
                            about:false,
                            skills:false,
                            work:false,
                            download: true
                        })}>Download CV</a></li>
                </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>
        </nav>
    </header>
    )
}
