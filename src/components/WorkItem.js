import React,{useEffect} from 'react'
import ScrollReveal from 'scrollreveal';

export const WorkItem = ({name, url, lang, desc}) => {
    let icon;
    if(lang==='JavaScript') {
        icon=<i className='bx bxl-javascript' ></i>
    } else if(lang==='HTML'){
        icon=<i className='bx bxl-html5' ></i>
    } else if(lang==='TypeScript'){
        icon=<i className='bx bxl-angular' ></i>
    } else{
        icon=<i className='bx bxl-codepen' ></i>
    }

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true
        });
        
      
        
        /*SCROLL WORK*/
        sr.reveal('.work__rep',{interval: 200}); 
      
      });
    
    return (
        
            <div className="work__rep">
                <div>
                <a href={url} target="_blank" rel='noreferrer'>
                <div>
                    <div>
                        <h3>{name}</h3>
                         <p>{lang} {icon}</p>
                    </div>
                    
                    
                    <p>{desc?desc:'No description Available'}</p>
                </div>
                </a>
                </div>
            </div>
        
       
    )
}
