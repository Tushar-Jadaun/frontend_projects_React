import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);

    return(
        <div className="flex bg-blue-300 min-h-screen justify-center items-center" >
           <div className="rounded-xl bg-white border-2 p-8 text-center ">
                <h1 className="text-2xl font-bold justify-center">Counter App</h1>
                <p className={`font-bold text-2xl ${count>5 ? "text-red-500":"text-black"}`}>{count}</p>
               <div>
                    <button className="bg-red-600 rounded-2xl p-4 justify-center mr-4 font-bold text-2xl hover:bg-red-900" onClick={()=>setCount(count+1)}>+</button>
                    <button className="bg-green-600 rounded-2xl p-4 justify-center font-bold text-2xl hover:bg-green-900" onClick={()=>{
                        if(count>0){
                            setCount(count-1);
                        }
                    }}>-</button>
                </div>
                <button className="bg-gray-400 rounded-2xl p-2.5 mt-2 font-bold text-2xl hover:bg-gray-600" onClick={()=>setCount(0)}>Reset</button>
           </div>
        </div>
    )

}
export default Count;