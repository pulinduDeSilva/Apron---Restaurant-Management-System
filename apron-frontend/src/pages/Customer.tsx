import { useEffect, useState } from "react"
import Nav from "../components/Nav";
import type { ActiveStatusType } from "../components/enums/active";


export default function Customer(props: { active: ActiveStatusType; }) {

    const [active, setActive] = useState<ActiveStatusType>(props.active);

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

   


    return (
        <>
            <Nav active={active} />

            <section>
                {
                    active == "foods" && (
                        <h1>foods</h1>
                    ) || active == "orders" && (
                        <h1>orders</h1>
                    ) || active == "cart" && (
                        <h1>cart</h1>
                    )
                }
            </section>

        </>
    )
}
