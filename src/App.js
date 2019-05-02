import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';


class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        { id: 1, name: "Ravid", budget: 7 },
        { id: 2, name: "Yossi", budget: 4 }
      ],
      currentUser: null,
      movies: [
        { id: 0, rented: { 1: true, 2: true }, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, rented: { 1: true }, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, rented: {}, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, rented: { 1: true }, title: "The Sword in the Stone", year: 1963, img: "https://images-na.ssl-images-amazon.com/images/I/51HBlt6UPCL.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, rented: {}, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ]
    }
  }

  changeUser = (id) => {
    this.setState({ currentUser: id })
  }

  budgetFunc = (newBudget) => {
    let users = [...this.state.users]
    users.find(u => u.id == this.state.currentUser).budget = newBudget

    this.setState({ users })
  }

  rent = (id) => {
    let movies = [...this.state.movies]
    let movie = movies.find(m => m.id == id)
    movie.rented[this.state.currentUser] ? movie.rented[this.state.currentUser] = false : movie.rented[this.state.currentUser] = true

    this.setState({ movies })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <div id="main-links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/catalog">Catalog</Link>
            <img src="./logo.svg" alt="" />
            <hr />
          </div>
          <Route exact path="/" render={() => <Landing
            users={this.state.users}
            currentUser={this.state.currentUser}
            changeUser={this.changeUser}
          />} />
          <Route exact path="/catalog" render={() => <Catalog
            movies={this.state.movies}
            rent={this.rent}
            currentUser={this.state.currentUser}
            users={this.state.users}
            budgetFunc={this.budgetFunc} />}
          />
          <Route exact path="/movies/:id" render={({ match }) => <MovieDetail match={match} movies={this.state.movies} />} />
        </div>
      </Router>
    );
  }
}

export default App;
