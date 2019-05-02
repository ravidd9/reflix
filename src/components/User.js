import React, { Component } from 'react';

class User extends Component {

    changeUser = () =>{
        this.props.changeUser(this.props.user.id)
    }

    render() {
        return (
            <div
                onClick={this.changeUser}
                className="userBox">
                {this.props.user.name}
            </div>
        );
    }
}

export default User;