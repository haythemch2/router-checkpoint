import React from 'react'
import {withRouter} from 'react-router-dom'

function movies(props) {
    console.log(props)
    let movie =props.movies.find((el)=>(el.id==props.match.params.id));

    return (
        <div className='Movie'>
            <h1>{movie.name}</h1>
            <iframe width="560" height="315" src={movie.trailerurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            <h4>{movie.description}</h4>
        </div>
    )
}

export default withRouter(movies);
