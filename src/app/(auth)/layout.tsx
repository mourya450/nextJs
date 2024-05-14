"use client"
import { error } from "console"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname()
    const router= useRouter()
    const routes =[
        {name:"login",href:"/login"},
        {name:"register",href:"/register"}
    ]

    
    return (
        <>
          <nav>
            {routes.map((link)=>{ 
                let isActive = pathname.startsWith(link.href)
                return (<button onClick={()=>router.push(link.href)} key={link.name} className={isActive ?`font-bold mr-4`:`text-blue-500 mr-4`}>{link.name}</button>)
            })}
          </nav>
          <main>{children}</main>
          </>
    )
  }