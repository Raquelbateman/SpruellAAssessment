import axios from "axios"
import { useEffect, useState } from "react";

interface TodoItem {
    userId: number;
    id: number;
    title:string;
    completed: true;
  }

const FetchingAxios = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [error, setError] = useState("");
    const [editId, seteditId] = useState();
    const [editText, seteditText] = useState("");

    const FetchData = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/") // Make a GET request to the API
          .then((response) => setTodos(response.data))       // Set users state with the fetched data
          .catch(error => setError(error.message));          // Set error state with the error message
      };

      
      useEffect(() => {
        FetchData();
      }, []);


  return (
    <>




    </>
  )
}

export default FetchingAxios