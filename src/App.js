import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect } from 'react'
import { useState } from 'react';
import Newscards from './components/Newscards/Newscards';


const alankey='6c4aa24038271474ceb7964d675e89bf2e956eca572e1d8b807a3e2338fdd0dc/stage';
export default function App() {
  
const [newsarticles,setnewsarticles]=useState([]);
const [activeArticle, setActiveArticle]=useState(-1);


    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand:({command,articles,number})=>{
                if(command==='newheadlines'){
                   setnewsarticles(articles);
                   setActiveArticle(-1); 
                }
                else if(command==='highlight'){
                  setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
                }
               
            }
        })
    },[])
  return (
    

    <div><h1 style={{color:'white',textAlign:'center'}}>News App</h1>
      <Newscards articles={newsarticles} activeArticle={activeArticle}/>
    </div>
  )
}
