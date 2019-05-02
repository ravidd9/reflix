import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Movie extends Component {
    rent = () => {
        if (this.props.movie.rented[this.props.currentUser]) {
            this.props.budgetFunc(this.props.budget + 3)
            this.props.rent(this.props.movie.id)
        } else {
            if (this.props.budget < 3) {
                alert("Not Enough Money!")
            } else {
                this.props.budgetFunc(this.props.budget - 3)
                this.props.rent(this.props.movie.id)
            }
        }
    }

    render() {
        const movie = this.props.movie
        return (
            <div key={movie.id} className="movieDiv">
                <Link to={`/movies/${movie.id}`}>
                    <div style={{ backgroundImage: `url(${movie.img})` }} className="imgDiv"></div>
                </Link>
                {movie.rented[this.props.currentUser] ?
                    <i className="fas fa-minus-square" onClick={this.rent}></i> :
                    <i className="fas fa-plus-square" onClick={this.rent}></i>}
            </div>
        );
    }
}

export default Movie;