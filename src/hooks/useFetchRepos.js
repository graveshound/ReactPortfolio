import { useState,useEffect } from "react"
import { getRepos } from "../helpers/getRepos"


export const useFetchRepos=()=>{


    const [state, setState] = useState({

        data:[],
    
    })

     useEffect(()=>{
       getRepos()
       .then(repo=>{

        
            setState({
                data:repo
            })
        }
        
           
       )
    },[])

  

    return state;
}