const USERNAME='graveshound';
const RESULTS='9'

export const getRepos = async() =>{

        
    const url =`https://api.github.com/users/${USERNAME}/repos?per_page=${RESULTS}&sort=desc`;

        const resp = await fetch(url);
        const data= await resp.json();

        const repos= data.map(repo=>{
            return{
                name:repo.name,
                url:repo.html_url,
                lang:repo.language,
                desc:repo.description
            }
        })
        
        return repos;

    }