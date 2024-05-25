import Card from "@/component/Card";
import Link from "next/link";

export default function Login(){
    return(
        <Card>
           <div>Please login to continue</div>
           <Link href="/login">Login</Link>
           <Link href="/register">Register</Link>
        </Card>
    )
}