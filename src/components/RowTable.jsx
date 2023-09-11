import { IconLink } from "./icons";

export default function RowTable() {
  return (
    <>
      <tr className="text-Lite bg-Blue-Hight">
        <td className="p-5">https://linkARVC.com/Bn41aCOlnxj</td>
        <td className="p-5">https://www.youtube.com/watch?v=8J7ZmH0lXuk</td>
        <td className="p-5">123456</td>
        <td className="p-5">
          Active{" "}
          <button>
            <IconLink />
          </button>
        </td>
        <td className="p-5">Sep - 11 - 2023</td>
      </tr>
      <tr className="h-[5px]"></tr>
    </>
  );
}
