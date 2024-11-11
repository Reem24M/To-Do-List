import { useEffect, useRef, useState } from 'react';
import Todolist from './Todolist';

const Todo = () => {
  const [todolist,settodolist]=useState([])
  const inputref=useRef();

  const add =()=>
    {
      const inputtext=inputref.current.value.trim();
     if(inputtext == "")
      {
        return null;
      }
      const newtodo={
        id: Date.now(),
        text: inputtext,
        iscomplete : false,
      }
      settodolist((prev)=>[...prev,newtodo]);
      inputref.current.value="";
    }
    const deletetodo=(id)=>
      {
settodolist((prevtodo)=>{
  return prevtodo.filter((item)=>item.id!==id)
})
      }
      const toggle=(id)=>
        {
         settodolist((prevtodo)=>{
          return prevtodo.map((todo)=>{
            if(todo.id === id)
              {
                  
                 return {...todo, iscomplete: !todo.iscomplete}
              }
                return todo;
          })
         })
        }
        useEffect(()=>{
          console.log(todolist);
        },[todolist]);
    return(
      <>
      {/* <span><i className="fa-solid fa-moon flex justify-end text-lg"></i></span> */}
        <div className=" grid place-items-center h-screen bg-slate-800">
          <div className=" w-2/5 bg-white rounded-lg h-4/5">
            <h1 className="  w-full font-extrabold text-4xl ml-5 mt-10 text-orange-500"><i className="fa-solid fa-calendar-days"></i> To-Do list</h1>
            <div className="bg-gray-200 rounded-full flex justify-around mx-5 my-10">
              <input  ref={inputref} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-700" placeholder="enter your task "></input><button onClick={add} className="bg-orange-600 text-white rounded-full  w-20 px-5 py-2">ADD</button>
            </div>
            <div className=" h-3/5 scroll-smooth">
               {todolist.map((item,index)=>{
                return <Todolist key={index} text={item.text}  id={item.id} iscomplete={item.iscomplete} deletetodo={deletetodo} toggle={toggle}/>
               })}
            
            </div>
          </div>
        </div>
      </>
    )
}

export default Todo