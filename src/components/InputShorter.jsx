import { IconArrowRight, IconLink } from "./icons";

export default function InputShorter(){
    return(
        <div className="bg-Grey w-[50%] flex rounded-3xl gap-5 items-center p-1 border-solid border-4 border-Blue-Low">
            <IconLink />
            <input type="url" className="grow text-center bg-Grey p-4 outline-none" placeholder="Enter the link here..." />
            <button className="grow-0 bg-Brand-Primary-Blue rounded-3xl h-[100%] px-8 font-SF_Pro_Display_Medium flex justify-center items-center gap-2">Shorten Now! <IconArrowRight /></button>
        </div>
    )
}