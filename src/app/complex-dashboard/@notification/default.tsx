import Card from "@/component/Card";
import Link from "next/link";

export default function DefaultNotification(){
    return(
        <Card>
            <h1>Notification</h1>
            <Link href="/complex-dashboard/archived">Arcihved</Link>
        </Card>
    )
}