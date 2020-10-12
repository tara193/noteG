import { connect } from "react-redux";
import EditNotes from "../../components/Notes/EditNotes";
import type from "../../store/actions";
import React from "react";

const EditNoteContainer = (props) => {
  console.log(props);
  return <EditNotes {...props} />;
};
const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveNotes: (title, body) =>
      dispatch({
        type: type.NOTE_SAVE,
        newNote: { title: title, body: body },
      }),
    onAddNote: () => dispatch({ type: type.NOTE_INIT_REQUEST }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteContainer);
