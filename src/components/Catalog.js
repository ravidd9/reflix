import React, { Component } from 'react';
import Movie from './Movie';
import generate from '@babel/generator';


class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            search: "ion"
        }
    }

    checkRented = () => this.props.movies.some(m => m.isRented)

    change = (event) => {
        this.setState({
            search: event.target.value
        })
    }


    render() {
        const movies = this.props.movies
        return (
            <div>
                <input type="text" value={this.state.search} onChange={this.change} />
                {this.checkRented() ?
                    <div id="rentedCatalog">Rented:
                    {movies.map(m => {
                        return m.isRented ?
                            m.title.toLowerCase().includes(this.state.search.toLowerCase()) ?
                                <Movie key={m.id} movie={m} rent={this.props.rent} /> :
                                null :
                            null
                    })}
                    </div> : null}

                <div id="moviesCatalog">Catalog:
                    {movies.map(m => m.title.toLowerCase().includes(this.state.search.toLowerCase()) ?
                    <Movie key={m.id} movie={m} rent={this.props.rent} /> :
                    null)}
                </div>
            </div>
        );
    }
}

export default Catalog;