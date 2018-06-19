import React, { Component } from 'react'

export default class SongCreate extends Component {
  constructor(props) {
      super(props);
      this.state = { title: '' };
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form>
            <label>Song Title: </label>
            <input
                onChange={event => this.setState({ title: event.target.value })}
                value={this.state.value}/>
        </form>
      </div>
    )
  }
}
