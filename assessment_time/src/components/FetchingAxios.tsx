import axios from "axios"
import { useState } from "react";

interface TodoItem {
    userId: number;
    id: number;
    title:string;
    completed: true;
  }

const FetchingAxios = () => {

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState<TodoItem[]>([]);
    const [error, setError] = useState('');
    const [editId, seteditId] = useState();
    const [editText, seteditText] = useState()
  return (
    <>




    </>
  )
}

export default FetchingAxios