import {  useEffect, useState } from "react"
import hamburgerIcon from "../assets/icons/hamburger.svg"
import type { ActiveStatusType } from "./enums/active";

export default function Nav(props: { active: ActiveStatusType }) {
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState<ActiveStatusType>(props.active);


    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    

    return (
        <>
            <nav className="py-3 mb-6 flex justify-between items-center">
                <h1 className="font-head text-headcolor text-2xl mx-6">Apron</h1>
                <button className=" rounded-md hover:bg-gray-200 mx-6 p-2 md:hidden" onClick={() => setMenu(!menu)} >
                    <img src={hamburgerIcon} alt="collapse" className="" />
                </button>

                <div className="gap-1 mx-8 hidden md:flex" id="defaultNav">
                    <a href="/foods" style={active === "foods" ? {color: "#78602b", backgroundColor: "#00000011"} : {} } className="font-medium px-4 py-3 rounded-sm hover:scale-108 transition delay-1 ease-linear">Foods</a>
                    <a href="/myorders" style={active === "orders" ? {color: "#78602b", backgroundColor: "#00000011"} : {} } className="font-medium px-4 py-3 rounded-sm hover:scale-108 transition delay-1 ease-linear">My Orders</a>
                    <a href="/cart" style={active === "cart" ? {color: "#78602b", backgroundColor: "#00000011"} : {} } className="font-medium px-4 py-3 rounded-sm hover:scale-108 transition delay-1 ease-linear">Cart</a>
                </div>


            </nav>
            <div className={`${menu ? "block" : "hidden"} items-center justify-end lg:hidden`}>
                <div className="space-y-1 px-4 pt-2 pb-3 ">
                    <a href="/foods" style={{ color: active === "foods" ? "#78602b" : "" }} className="block  px-3 py-2 text-base font-medium text-black hover:scale-108 transition delay-1 ease-linear">Foods</a>
                    <a href="/myorders" style={{ color: active === "orders" ? "#78602b" : "" }} className="block border-y-1 border-black/10 px-3 py-2 text-base font-medium text-black  hover:scale-108 transition delay-1 ease-linear">My Orders</a>
                    <a href="/cart" style={{ color: active === "cart" ? "#78602b" : "" }} className="block  px-3 py-2 text-base font-medium text-black  hover:scale-108 transition delay-1 ease-linear">Cart</a>
                </div>

            </div>
            
        </>
    )
}