import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./EditNote.css";


const EditNote = (props) => {
  const id = props.match.params.id;
  console.log(id);
  let note = null;
  useEffect(() => {
    note = useSelector((state) => {
      state.notes.list.find((p) => p.id === id);
    });
  }, []);

  useEffect(() => {
    note = useSelector((state) => {
      state.notes.list.find((p) => p.id === id);
    });
  }, [id]);

  let showNote = <p style={{ textAlign: "center" }}>Please select a Note!</p>;
  if (props.match.params.id) {
    showNote = <p style={{ textAlign: "center" }}>Loading...!</p>;
  }
  if (note) {
    showNote = (
      <div className="EditNote">
        <h1>{this.state.loadedPost.title}</h1>
        <p>{this.state.loadedPost.body}</p>
        <div className="Edit">
          <button onClick={this.deletePostHandler} className="Delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
  deletePostHandler = () => {};

  return showNote;
};

export default EditNote;
