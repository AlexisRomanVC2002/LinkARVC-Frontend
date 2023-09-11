export default function HeaderTable({ titles }) {
  return (
    <thead className="bg-Grey">
      <tr className="text-Lite text-base">
        {titles.map((title, index) => {
          return <th key={index} className="text-left p-3">{title}</th>;
        })}
      </tr>
      <tr className="h-[5px]"></tr>
    </thead>
  );
}
