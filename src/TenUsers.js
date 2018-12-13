import React from 'react'

class TenUsers extends React.Component {
    state = {
        users: null
    }

    componentDidMount() {
        console.log("ComponenetDidMouont")
        this.setState({ isLoading: true })
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(data => this.setState({
                users: data.results,
            }))
    }

    render() {
        console.log('RENDER!')
        return (
            <div>
                {
                    this.state.users &&
                    this.state.users.map &&
                    this.state.users.map((user) => (
                        <div
                            key={user.login.uuid}>
                            {user.name.first} {user.name.last} {user.email}
                            <img src={user.picture.medium} alt="user"></img>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default TenUsers