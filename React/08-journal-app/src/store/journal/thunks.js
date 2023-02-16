export const startNewNote = () => {
  return async(dispatch) => {
    // Obtener el UID

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    // dispatchs
    // dispatch(newNote)
    // dispatch(activarNota)
  }
}