import React from "react";
import "../index.css";
import TodoItem from "./Items/TodoItem";
import { useState ,useRef } from "react";

const Home = () => {
  const db = [
    {
      id: "213213123",
      name: "Marriage and Family Harmony",
      isCompleted: false,
    },
    {
      id: "21321312312312",
      name: "Proper Mindset and Balance",
      isCompleted: false,
    },
    {
      id: "21321312311231223123123",
      name: "Commitment to Improved Physical Health",
      isCompleted: false,
    },
    {
      id: "2132131221323233123123123",
      name: "Career Passion and Personal Satisfaction",
      isCompleted: false,
    },
    {
      id: "21321312312321312323123",
      name: " Develop Empathy and Gentleness",
      isCompleted: false,
    },
    {
      id: "1232",
      name: "Financial Stability",
      isCompleted: false,
    },
    {
      id: "213213123122131233123123",
      name: "Service and Social Responsibility",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(db);

  const changeTodos = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodos = (id) => {
    let test = [...todos].filter(t => t.id !== id)
    setTodos(test);
    console.log(id)
   
  };
const nameinp = useRef (null) ;
console.log(nameinp)
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: new Date(),
        name:nameinp.current.value,
        isCompleted: false,
      },  
    ]);
  };

  return (
    <div className="flex flex-col items-center m-padding bg-gray-900">
      <h1 className="text-center">
        Your Todo List For Today <br /> <strong>Just do it!</strong>
      </h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isCompleted={todo.isCompleted}
          changeTodos={changeTodos}
          removeTodos={removeTodos}
        />
      ))}
      <input type="text" class='inp bg-gray-700 rounded-lg p-5' ref={nameinp}/>
      <button className="add_Todo" onClick={addTodo}>+</button>
    </div>
  );
};

export default Home;


//Баг в функциях add delete исправить и сделать кнопку для add, сделать регистрацию для каждого пользователя и подключить бд реал
