import { Link } from 'react-router-dom'
export default function Cards() {
    return (
        <div class="card bg-blue" style="width: 18rem;">
            <img src={movie.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title yellow-font">{movie.title}</h5>
                <h6 className='card-title'>{movie.director}</h6>
                <h6 className='card-title'>{movie.release_year}</h6>
                <p class="card-text">{movie.abstract}</p>
                <Link to={'/:id'} class="btn btn-primary">Dettagli</Link>
            </div>
        </div>
    )
}