import React from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import CommentList from "./CommentList";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //call action creatot & save comment
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add a Comment</h1>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComment}>
          Fetch comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
