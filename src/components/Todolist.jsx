const Todolist = ({text,id,iscomplete,deletetodo,toggle}) => {
  return (
    <div>
      
    <div className="flex flex-1 cursor-pointer items-center justify-between bg-gray-100 rounded-full mx-5 my-5">
        <p className={`mx-5 ${iscomplete ? "line-through" : ""}`}>{text}</p>
        <div className="flex  justify-between">

       <div className={`rounded-full   w-8 h-8 items-center flex justify-center ${iscomplete ? "bg-green-600 text-white" : " bg-white  text-white border-gray-500 border-4"}`}>
        <i className={`text-lg ${iscomplete ? 'fa-solid fa-check' : 'fa-regular fa-circle'}`} onClick={()=>toggle(id)}></i>
       </div>
       <div className="rounded-full bg-gray-600 text-white w-8 h-8 items-center flex justify-center ml-2">
       <i className="fa-solid fa-trash text-xl" onClick={()=>deletetodo(id)}></i>
       </div>
        </div>
    </div>
    </div>
  )
}

export default Todolist