
import { toDoList } from './data'
import { renderToDos } from './render'
import './style.css'

let updatedToDos = toDoList

renderToDos(updatedToDos)

window.handleDelete =function handleDelete(id){
  console.log(id);
  updatedToDos = updatedToDos.filter(obj=>obj.id!=id)
  renderToDos(updatedToDos)
}

window.handleUpdate = function handleUpdate(id){
  console.log(id);
  const selectedToDo = updatedToDos.find(obj=>obj.id == id)
  console.log(selectedToDo);
  selectedToDo.done=!selectedToDo.done
  renderToDos(updatedToDos)
  
}
window.handleAdd = function handleAdd(){
  const name = document.getElementById("newtodo").value
  if(name.trim().length==0) return
  console.log(newtodo);
  const id=Date.now()
  console.log(id);
  const newitem = {id, name, done: false}
  updatedToDos = [...updatedToDos, newitem]
  renderToDos(updatedToDos)
  document.getElementById("newtodo").value=""
}