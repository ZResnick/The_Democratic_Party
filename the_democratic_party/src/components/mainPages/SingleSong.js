import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvote, downvote } from '../../store/reducers/songReducer';

class SingleSong extends Component {
  downvote(id, votes) {
    this.props.downvote(id, votes);
  }

  upvote(id, votes) {
    this.props.upvote(id, votes);
  }

  render() {
    let minutes = Math.floor(this.props.length);
    let seconds = Math.floor((this.props.length * 60) % 60);

    return (
      <tr className="singleSong">
        <th>{this.props.title}</th>
        <th>{this.props.artist}</th>
        <th>{this.props.album}</th>
        <th>
          {minutes}:{seconds}
        </th>
        <th>
          <button
            onClick={() => this.downvote(this.props.id, this.props.upvotes)}
          >{`<`}</button>
          {this.props.upvotes}
          <button
            onClick={() => this.upvote(this.props.id, this.props.upvotes)}
          >{`>`}</button>
        </th>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  upvote: (id, votes) => dispatch(upvote(id, votes)),
  downvote: (id, votes) => dispatch(downvote(id, votes)),
});

export default connect(
  null,
  mapDispatchToProps
)(SingleSong);