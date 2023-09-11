import { IconLogin } from "./icons";

export function Header(){
    return(
        <nav className="text-Lite flex justify-between px-14 py-8">
            <p className="font-SF_Pro_Display_Bold text-3xl">LinkARVC</p>
            <div className="flex gap-10">
                <a href="#" className="bg-Grey py-3 px-5 rounded-3xl flex align-middle gap-3 font-SF_Pro_Display_Medium">Login <IconLogin /></a>
                <a href="#" className="bg-Brand-Primary-Blue py-3 px-5 rounded-3xl font-SF_Pro_Display_Medium">Register Now</a>
            </div>
        </nav>
    )
}