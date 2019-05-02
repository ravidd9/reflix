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

    checkSomeRented = () => this.props.movies.some(m => m.rented[this.props.currentUser])

    changeSearchValue = event => this.setState({search: event.target.value})

    checkSearchMatch = title => title.toLowerCase().includes(this.state.search.toLowerCase())

    render() {
        const movies = this.props.movies
        let budget
        if (this.props.currentUser) {
            budget = this.props.users.find(u => u.id == this.props.currentUser).budget
        }
        return (
            <div>
                {!this.props.currentUser ? <Redirect to={`/`} /> :
                    <div>
                        {this.props.currentUser ?
                            <div>Hello, {this.props.users.find(u => u.id == this.props.currentUser).name}</div> :
                            null}
                        <div>Budget: {budget}</div>
                        <input placeholder="Enter Title Here" type="text" value={this.state.search} onChange={this.changeSearchValue} />
                        {this.checkSomeRented() ?
                            <div id="rentedCatalog">
                                <div className="title">Rented:</div>
                                {movies.map(m => {
                                    return m.rented[this.props.currentUser] ?
                                        this.checkSearchMatch(m.title) ?
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
                            <div className="title">Catalog:</div>
                            {movies.map(m => this.checkSearchMatch(m.title) ?
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