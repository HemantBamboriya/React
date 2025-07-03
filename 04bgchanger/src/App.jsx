import { useState } from "react"


function App() {
 
  const [color,setcolor]=useState("pink")

  return (
    <>
    <div className="w-full h-screen  duration-300"
    style={{backgroundColor:color}}>

      <div>
        <h1 className="flex flex-wrap justify-center px-9 py-10">BackGround Changer</h1>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=> setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>

           <button 
          onClick={()=> setcolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>

           <button 
          onClick={()=> setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>
           <button 
          onClick={()=> setcolor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}}>Olive</button>


           <button 
          onClick={()=> setcolor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"gray"}}>Gray</button>
          
           <button 
          onClick={()=> setcolor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}}>Yellow</button>

           <button 
          onClick={()=> setcolor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>Pink</button>
           <button 
          onClick={()=> setcolor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>Purple</button>

           <button 
          onClick={()=> setcolor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"lavender"}}>Lavender</button>

           <button 
          onClick={()=> setcolor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"white"}}>White</button>

           <button 
          onClick={()=> setcolor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>Black</button>

           <button 
          onClick={()=> setcolor(" #0F4C81")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:" #0F4C81"}}>Classic Blue</button>

          <button 
          onClick={()=> setcolor("#FFBE98")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:" #FFBE98"}}>Peach Fuzz</button>

                    <button 
          onClick={()=> setcolor("#FFA500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#FFA500"}}>Orange</button>

        </div>
      </div>
     
    </div>

    </>
  )
}

export default App
