"use client"
import Link from 'next/link'
import React from 'react'

function Login() {
  function randomNumber(arg:number){
    return Math.floor(Math.random() * arg)
}

function RandomNumberLoader(){
    if(randomNumber(2) ===1){
        throw new Error("Error while loading the login page")
    }else{
        return <div>{randomNumber(2)}</div>
    }
}
  return (
    <>
    <div>this is login</div>
    <Link href="/register">register</Link>
    {RandomNumberLoader()}
    </>
  )
}

export default Login