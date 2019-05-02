import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Landing extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        const users = this.props.users
        return (
            <div>
                {users.map(u => <Link to="/catalog">
                    <div key={u.name} className="userBox">
                        {u.name}
                    </div>
                </Link>)}
            </div>
        );
    }
}

export default Landing;