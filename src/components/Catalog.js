import React, { Component } from 'react';
import Movie from './Movie';
import generate from '@babel/generator';
import { Redirect } from 'react-router-dom'



class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
        }
    }

    checkRented = () => this.props.movies.some(m => m.rented[this.props.currentUser])

    change = (event) => {
        this.setState({
            search: event.target.value
        })
    }



    render() {
        const movies = this.props.movies
        let budget = this.props.users.find(u => u.id == this.props.currentUser).budget
        return (
            <div>
                {!this.props.currentUser ? <Redirect to={`/`} /> :
                    <div>
                        <div>Budget: {budget}</div>
                        {this.props.currentUser ?
                            <div>Hello, {this.props.users.find(u => u.id == this.props.currentUser).name}</div> :
                            null}
                        <input type="text" value={this.state.search} onChange={this.change} />
                        {this.checkRented() ?
                            <div id="rentedCatalog">
                                <span>Rented:</span>
                                {movies.map(m => {
                                    return m.rented[this.props.currentUser] ?
                                        m.title.toLowerCase().includes(this.state.search.toLowerCase()) ?
                                            <Movie
                                                key={m.id}
                                                movie={m}
                                                currentUser={this.props.currentUser}
                                                rent={this.props.rent}
                                                budgetFunc={this.props.budgetFunc}
                                                budget={budget} /> :
                                            null :
                                        null
                                })}
                            </div> : null}
                        <div id="moviesCatalog">
                            <span>Catalog:</span>
                            {movies.map(m => m.title.toLowerCase().includes(this.state.search.toLowerCase()) ?
                                <Movie
                                    key={m.id}
                                    movie={m}
                                    rent={this.props.rent}
                                    currentUser={this.props.currentUser}
                                    budgetFunc={this.props.budgetFunc}
                                    budget={budget} /> :
                                null)}
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Catalog;