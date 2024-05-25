import Card from "@/component/Card";
import Link from "next/link";

export default function Notification(){
    return(
        <Card>
            <h1>Archived Notification page</h1>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    )
}