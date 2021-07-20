import React, { useState } from 'react'

// import { delTodo, fetchUpdateTodos, fetchTodoStatus } from '../actions'

export default function EventItem (props) {
  const { id, type, title, date } = props.event

  //   function handleDelete () {
  //     props.dispatch(delTodo(id))
  //   }

  //   function handleUpdate () {
  //     props.dispatch(fetchUpdateTodos(id))
  //   }

  return (
    <div>
      <p>{title}</p>
      <p>{type}</p>
      <p>{date}</p>
      {/* <ul><button onClick={handleDelete}>Delete Task</button></ul>
      <ul><button onClick={handleUpdate}>Update Task</button></ul> */}
    </div>
  )
}
