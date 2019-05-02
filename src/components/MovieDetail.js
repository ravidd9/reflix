import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        const id = this.props.match.params.id
        const movie = this.props.movies.find(m => m.id == id)

        return (
            <div className="movieContainer">
                <div className="movieName">{movie.title}({movie.year})</div>
                <div style={{ backgroundImage: `url(${movie.img})` }} className="imgDiv"></div>
                <div className="movieInfo">{movie.descrShort}</div>
            </div>
        );
    }
}

export default MovieDetail;