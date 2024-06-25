import axios from "axios"
import { useEffect, useState } from "react";

interface TodoItem {
    userId: number;
    id: number;
    title:string;
    completed: false;
  }

const FetchingAxios = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [error, setError] = useState("");
    const [editId, setEditId] = useState("");
    const [editText, setEditText] = useState("");

    const FetchData = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos") // Make a GET request to the API
          .then((response) => setTodos(response.data))       // Set users state with the fetched data
          .catch(error => setError(error.message));          // Set error state with the error message
      };

      
      useEffect(() => {
        FetchData();
      }, []);

// create a new todo object with random id
      const addTodo = () => {
        if(input.trim()){
            const newTodo = {
                userId:1,
                id:Math.floor(Math.random()),
                title:input,
                completed:false,
            };
            //update the todo state by adding a new item to the existing list
            setTodos([...todo,newTodo]);
            setInput("");
        };
    // function to delete
    const deleteTodo = (id:number) => {
        //filter the existing list and only keep items where the id doesnt match
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);

    };

    // use a toggle function to toggle between complete  and incomplete
    const toggleComplete = (id:number) =>{
        const updatedTodos = todos.map((todo) => todo.id === id ? {...todo,completed: !todo.completed} : todo);
        // map over the todos to toggle completed status
        setTodos(updatedTodos);
};

//function to start editing

const startEdit = (id: number, title: string) => {
    setEditId(id); // Set the state variable 'editId' to the id of the todo item being edited
    setEditText(title); // Set the state variable 'editText' to the current text of the todo item being edited
  };

  // Function to stop editing a todo item
  const stopEdit = () => {
    setEditId(""); // Set  to an empty string
    setEditText(""); // Set to'editText' to an empty string, clearing the editing text
  };

  // Function to update a todo item with the edited text
  const updateTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: editText } : todo
    ); // Map over the todos and update the title
    setTodos(updatedTodos); // Update the todos
    stopEdit(); // stops editing
  };


  return (
    <>
 <h1 className="text-center">ToDo List</h1>
 <input type="text" placeholder="enter task" value={input} onChange={(e.target.value)}/>
 <button className="btn btn-success" title="Add new task" onClick={addTodo}>Add</button>
 {error && <p className="text-danger">{error}</p>}
 {todos.map((todo) =>
 <li key={todo.id}></li>

 <input type="checkbox" checked={todo.complete} onChange={() => toggleComplete(todo.id)}/>

 {editId === todo.id ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} //update edited text state
}

onKeyDown = {(e) => {
    if (e.key ==="Enter"){
        updateTodo(todo.id); //update todo with key press
    } else if (e.key === "Escape"){
        stopEdit(); //stops editing when escape is pressed
    }
}

<button title="Edit Task" onClick={() => startEdit(todo.id, todo.title)}>Edit</button>
<button title="Delete Task" onClick={() => deleteTodo(todo.id)}>Delete</button>



    </>
  )
}

export default FetchingAxios