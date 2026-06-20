
import { useEffect, useState } from "react";
import Customer from "./Customer";
import {  type ActiveStatusType } from "../components/enums/active";
import { Role, type RoleType } from "../components/enums/role";

interface Props {
    active: ActiveStatusType; // Uses the type for safety
}

export default function Page({ active }: Props) {

    const [activeStatus, setActive] = useState<ActiveStatusType>(active);
    const [role, setRole] = useState<RoleType>(Role.CUSTOMER);
    
    
    console.log(role)
    useEffect(() => {
        setActive(active);
    }, [active])

    return (
        <>
            <div>
                {role === Role.CUSTOMER ? <Customer active={activeStatus} /> : "Admin"}
            </div>
        </>
    )
}
