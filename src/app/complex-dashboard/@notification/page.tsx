import Card from "@/component/Card";
import Link from "next/link";

export default function Notification(){
    return(
        <Card>
            <h1>Notification page</h1>
            <Link href="/complex-dashboard/archived">Arcihved</Link>
        </Card>
    )
}