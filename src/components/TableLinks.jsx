import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";

export default function TableLinks(){

    const TITLES = ["Short Link", "Original Link", "Clicks", "Status", "Date"]

    return (
        <table className="w-full">
            <HeaderTable titles={TITLES}/>
            <tbody>
                <RowTable />
                <RowTable />
                <RowTable />
                <RowTable />
            </tbody>
        </table>
    )
}
