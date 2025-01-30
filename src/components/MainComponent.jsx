import { useState, useEffect } from "react"
import Cards from "./Cards"
import axios from "axios"

const apiUrl = import.meta.env.VITE_APIURL
export default function MainComponent() {
    const [movies, setMovies] = useState([]);

    const movieList = () => {
        axios.get(`${apiUrl}/api/movies`)
            .then((res) => {
                setMovies(res.data.movies)
            })
            .catch((err) => console.error("Errore nel fetch dei film:", err))
            .finally(() => {
                console.log('chiamata effettuata')
            });
    }
    useEffect(() => {
        movieList()
    })

    return (
        <section>
            <h3>catalogo</h3>
            <p>scegli il film più adatto a te</p>
            {movies.map((movie) => {
                <Cards movie={movie}></Cards>
            })}
        </section>
    )
}