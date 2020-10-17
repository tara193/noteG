import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EditNoteComponent from '../../components/EditNote/EditNote';

const EditNote = (props) => {
  const id = props.id;
  const noteList = useSelector((state) => state.notes.list);
  let note = noteList.find((p) => p.id === id);

  useEffect(() => {
    note = noteList.find((p) => p.id === id);
  }, [id,note]);

  const saveNoteHandler = () => {};

  return <EditNoteComponent note={note} />;
};

export default EditNote;
