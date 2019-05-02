import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Movie extends Component {
    rent = () => {
        this.props.rent(this.props.movie.id)
    }

    render() {
        const movie = this.props.movie
        return (
            <div key={movie.id} className="movieDiv">
                <Link  to={`/movies/${movie.id}`}>
                    <div style={{ backgroundImage: `url(${movie.img})` }} className="imgDiv"></div>
                </Link>
                {movie.isRented ?
                    <i className="fas fa-minus-square" onClick={this.rent}></i> :
                    <i className="fas fa-plus-square" onClick={this.rent}></i>}
            </div>
        );
    }
}

export default Movie;