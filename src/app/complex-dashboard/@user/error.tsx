"use client"
import Card from "@/component/Card"
import "./style.css"
export default function ErrorHandler({error, reset}:{error:Error, reset:()=>void}){
    return(  <Card>
        {error.message}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={reset}>Retry</button>
        </Card>)
}