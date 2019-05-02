import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import User from './User';

class Landing extends Component {

    render() {
        const users = this.props.users
        return (
            <div>
                <Link to="/catalog">
                    {users.map(u => <User key={u.id} user={u} changeUser={this.props.changeUser} />)}
                </Link>
            </div>
        );
    }
}

export default Landing;