import React, { useRef } from 'react'
import openai from '../utils/openAi'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovieResult } from '../utils/GptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const handleGptSearchClick = async()=>{
   console.log(searchText.current.value)
   const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" + searchText.current.value +"only give me names of five movies comma seperated like the example result given ahead.Example result:Gadar, Sholay,Don";
   
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){
      // TODO: Write Error Hadling
    }
    console.log(gptResults.choices?.[0]?.message?.content)
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");


    const promiseArray =gptMovies.map(movie=>searchMovieTMDB(movie)); 
    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);
    dispatch(addGptMovieResult({movieNames: gptMovies,movieResults:tmdbResult}));
    
  }
  const searchText = useRef(null);
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input
                ref={searchText}
                type="text"
                className='p-4 m-4 col-span-9'
                placeholder='what would you like to watch?'
             />
             <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar