import React from 'react';
import { useFetchRepos } from '../hooks/useFetchRepos';
import { WorkItem } from './WorkItem';




export const Works = () => {

    const {data:repos}=useFetchRepos()
    return (
        <section className="work section" id="work">
                <h2 className="section-title">Work</h2>
                <div className="work__container bd-grid">
                {
                    repos.map(repo=>{
                        return <WorkItem
                        key={repo.url}
                        {...repo}/>
                    })
                }
                <div className="work__rep">
                <span> Find more at...</span>
                <a href='https://github.com/graveshound' target="_blank" rel='noreferrer'>
                    

                    <i id='more'className='bx bxl-github' ></i>
                </a>
            </div>
              </div>
            </section>
    )
}
