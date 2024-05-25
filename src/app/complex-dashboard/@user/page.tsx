"use client"
import Card from "@/component/Card";

export default function User(){
    const randomNumber=(arg:number)=>{
        return Math.floor(Math.random() * arg)
    }

    if(randomNumber(2) ===1){
         throw new Error("something went wrong with the user")
    }
    return(
        <Card>User page</Card>
    )
}