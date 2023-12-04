import React, {useEffect, useState} from 'react'
import SearchBar from './components/SearchBar';
import RatingMovie from './components/RatingMovie';
import {query, getDocs, collection, where, doc, updateDoc} from "firebase/firestore";
import {db} from "../firebaseConfig"
import { useNavigate } from 'react-router-dom'

const tempMovieList = [
    "2001: A Space Odyssey (1968)",
    "Blade Runner (1982)",
    "City of Lost Children, The (Cité des enfants perdus, La) (1995)",
    "Clerks (1994)",
    "Die Hard (1988)",
    "Dragonheart (1996)",
    "E.T. the Extra-Terrestrial (1982)",
    "Escape to Witch Mountain (1975)",
    "Fish Called Wanda, A (1988)",
    "Interview with the Vampire: The Vampire Chronicles (1994)",
    "Jumanji (1995)",
    "Léon: The Professional (a.k.a. The Professional) (Léon) (1994)",
    "Mask, The (1994)",
    "Monty Python and the Holy Grail (1975)",
    "Monty Python's Life of Brian (1979)",
    "One Flew Over the Cuckoo's Nest (1975)",
    "Platoon (1986)",
    "Pulp Fiction (1994)",
    "Raiders of the Lost Ark (Indiana Jones and the Raiders of the Lost Ark) (1981)",
    "Reservoir Dogs (1992)",
    "Rob Roy (1995)",
    "Rumble in the Bronx (Hont faan kui) (1995)",
    "Seven (a.k.a. Se7en) (1995)",
    "Shawshank Redemption, The (1994)",
    "Silence of the Lambs, The (1991)",
    "Star Wars: Episode IV - A New Hope (1977)",
    "Star Wars: Episode V - The Empire Strikes Back (1980)",
    "Terminator 2: Judgment Day (1991)",
    "Twelve Monkeys (a.k.a. 12 Monkeys) (1995)",
    "Usual Suspects, The (1995)",
    "What's Eating Gilbert Grape (1993)",
    "Wizard of Oz, The (1939)",
]

const movieResults = [
    "2001: A Space Odyssey (1968)",
    "Die Hard (1988)",
    "Dragonheart (1996)",
    "E.T. the Extra-Terrestrial (1982)",
    "Wizard of Oz, The (1939)",
]

const moviesRated = [
    { title: "Seven (a.k.a. Se7en) (1995)", rating: 4 },
    { title: "Silence of the Lambs, The (1991)", rating: 1 },
    { title: "Rob Roy (1995)", rating: 5 },
    { title: "Monty Python's Life of Brian (1979)", rating: 2 },
];

export default function PersonalizedRecommendations() {
    const [displayCount, setDisplayCount] = useState(8); // State to track the number of movies displayed
    const [results, setResults] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState("");
    const navigate = useNavigate();
    const [ratedMovies, setRatedMovies] = useState([]);

    const onMovieRated = (movieTitle, movieRating) => {
        setRatedMovies(prevMovies => [...prevMovies, { title: movieTitle, rating: movieRating }]);
    };

    const getUserRecommendations = async (movie) => {
        // // TODO: Get the current user's email
        // let queryForUser = query(collection(db, "users"), where("email", "==", "joelnataren9@hotmail.com")); 
        // let querySnapshot = await getDocs(queryForUser);
        // let userDoc = querySnapshot.docs[0];

        // let currentMoviesObj = userDoc.data().movies;

        // let data= {
        //     "userMovies": currentMoviesObj,
        // }
        // console.log("data for user based:",data);

        // let response = await fetch("http://localhost:8080/user-based-recommendation", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data),
        // })
        // // TODO: Use the following object to display the recommendations
        // let recommendationsObj = await response.json();
        // console.log(recommendationsObj);
        displayMovieRecommendations(movieResults);  // uncomment the above lines and delete this line
                                                    // this is displaying temporary results as backend is not running
    }
    
    const displayMovieRecommendations = (movies) => {
        navigate("/movie-recommendations-result", { state: { recommendation: "user", movies: movies } });
    }

    const toggleModal = (title) => {
        setCurrentTitle(title);
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <section className='main-content'> 
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
            <div className="absolute w-[80vw] bg-black text-white flex flex-col z-30 p-3 h-[80vh] justify-center items-center">
                <h1 className='text-2xl'>Personalized Picks</h1>
                <p className='text-lg'>Rate the following movies to get personalized recommendations</p>
                <div className="content-container" style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '50%', margin:'5px' }}>
                    <div className='search-section' style={{ flex: 1, padding: '10px' }}>
                        <SearchBar onSearch={setResults} />
                        {results.map((title, index) => (
                            <button key={index} onClick={() => toggleModal(title)} className='p-2 bg-green'>
                                {title}
                            </button>
                        ))}
                    </div>
                    <div className='movie-ratings'>
                        {/* moviesRated is temporary variable (because backend could not be run)
                            replace moviesRated to ratedMovies, which are retrieved from RatingMovie.js */}
                        {moviesRated.length > 0 && (
                            <div className="rated-movies" style={{ flex: 1, maxHeight: '100%', width: '300px', padding: '10px', overflow: 'auto' }}>
                                {moviesRated.map((movie, index) => (
                                    <div key={index} style={{ margin: '5px', border: '2px solid grey', wordWrap: 'break-word', padding: '5px'}}>
                                        <p>{movie.title} : <b>{movie.rating}</b></p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <button onClick={getUserRecommendations} className='rounded-md  p-2 bg-green-500 text-gray-700 m-5'>
                    Get Recommendations
                </button>
                <button className='absolute bottom-3 right-3 p-2' onClick={() => navigate("/")}>
                    Back Home
                </button>
            </div> 
            {
                modalIsOpen && <RatingMovie 
                                  modalIsOpen={modalIsOpen} 
                                  setModalIsOpen={setModalIsOpen} 
                                  currentTitle={currentTitle} 
                                  onMovieRated={onMovieRated} />
            }
        </section>
  )
}