const Note = ({ note, toggleImportance }) => {
  let label = note.important ?
              'make not unimportant' : 'make  important';
  return (
    <>
      <li>{note.content}</li>
      <button onClick={toggleImportance}>{label}</button>
    </>
  )
}

export default Note