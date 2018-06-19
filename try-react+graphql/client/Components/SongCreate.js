import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { addSong } from '../queries/index';
import { Link, hashHistory } from 'react-router'; 

class SongCreate extends Component {
  constructor(props) {
      super(props);
      this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    console.log(this.props);

    this.props.mutate({
      variables: { title: this.state.title },
      fetchQueries: [{ query: addSong }]

    }).then(() => hashHistory.push('/'))
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
            <label>Song Title: </label>
            <input
                onChange={event => this.setState({ title: event.target.value })}
                value={this.state.value}/>
        </form>
      </div>
    )
  }
}

export default graphql(addSong)(SongCreate);