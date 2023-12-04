import React, {useEffect, useState} from 'react'
import SearchBar from './components/SearchBar';
import { useNavigate } from 'react-router-dom'

const movieResults = [
    "Silence of the Lambs, The (1991)",
    "Star Wars: Episode IV - A New Hope (1977)",
    "Star Wars: Episode V - The Empire Strikes Back (1980)",
    "Terminator 2: Judgment Day (1991)",
    "Twelve Monkeys (a.k.a. 12 Monkeys) (1995)",
    "Usual Suspects, The (1995)",
    "What's Eating Gilbert Grape (1993)",
    "Léon: The Professional (a.k.a. The Professional) (Léon) (1994)",
    "Mask, The (1994)",
    "Monty Python and the Holy Grail (1975)",
    "Monty Python's Life of Brian (1979)",
    "One Flew Over the Cuckoo's Nest (1975)",
    "Platoon (1986)",
]

/**
 * Uses the search bar component to get a list of movies
 * and then uses the list of movies to get recommendations
 * It does the movie based recomendation 
 * @returns 
 */
export default function SimilarMovies() {
    const [results, setResults] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [movies, setMoviesList] = useState([
                                                "Inception (2010)",
                                                "The Matrix (1999)",
                                                "Interstellar (2014)",
                                                "Raiders of the Lost Ark (Indiana Jones and the Raiders of the Lost Ark) (1981)",
                                                "Silence of the Lambs, The (1991)",
                                            ]);  // clear out the list inside later when connected to backend
    const navigate = useNavigate();

    console.log(results);

    /**
     * 
     * @param movies: list of movies to get recommendations for
     */
    const getMovieBasedRecommendations = async (movies) => {
        // try {
        //     console.log(movies)
        //     let listofMovies = movies;
        //     let obj = {
        //         "movies": listofMovies,
        //     }
        //     let response = await fetch("http://localhost:8080/movie-based-recommendation", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(obj),
        //     })
        //     let json = await response.json();
        //     console.log(json);
        //     displayMovieRecommendations(json);
        // } catch (error) {
        //     console.log(error)
        // }
        displayMovieRecommendations(movieResults);  // uncomment the above lines and delete this line
                                                    // this is displaying temporary results as backend is not running
    }
    
    const displayMovieRecommendations = (movies) => {
        navigate("/movie-recommendations-result", { state: { recommendation: "movie", movies: movies } });
    }

    return (
        <section className='main-content'> 
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
            <div className="absolute w-[80vw] bg-black text-white flex flex-col gap-3 z-30 p-3 h-[80vh] justify-center items-center"> 
                <h1 className='text-2xl'>Find similar movies</h1>
                <p className='text-lg'>Enter a movie title to find similar movies</p>
                <div className="content-container" style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '50%', margin:'5px' }}>
                    <div className='search-section'  style={{ flex: 1, padding: '10px' }}>
                        <SearchBar onSearch={setResults}/>
                        <div className='flex flex-col gap-3 justify-center items-center text-black'>
                            {results.map((title, index) => (
                                <div key={index} className='flex flex-row gap-3 p-2 bg-gray-100 rounded-md'>
                                    <button  className=''>
                                        {title}
                                    </button>
                                    <button  onClick={() => {setMoviesList([...movies, title])}} className='p-2 bg-green-500 text-gray-700'>
                                        Add
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='added-movies'>
                        {movies.length > 0 && (
                            <div className="added-movies" style={{ flex: 1, maxHeight: '100%', width: '300px', padding: '10px', overflow: 'auto' }}>
                                <h2 style={{ margin: '5px'}}>Movies Added</h2>
                                {movies.map((movie, index) => (
                                    <p key={index} style={{ margin: '5px', border: '2px solid grey', wordWrap: 'break-word', padding: '5px'}}>{movie}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <button onClick={() => {getMovieBasedRecommendations(movies)}} className='rounded-md  p-2 bg-green-500 text-gray-700 m-5'>
                    Get Recommendations
                </button>
                <button className='absolute bottom-3 right-3 p-2' onClick={() => navigate("/")}>
                    Back Home
                </button>
            </div> 
        </section>
  )
}