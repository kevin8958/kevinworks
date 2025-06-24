'use client';

export default function SimpleTable(props: Common.SimpleTableProps) {
  const { columns = [], data = [] } = props;
  return (
    <div className="mx-auto mt-10 w-full overflow-hidden rounded-lg border shadow-md">
      <table className="w-full table-auto text-left text-sm">
        <thead className="bg-gray-100">
          {columns.map((col) => (
            <th key={col.key} className="cursor-pointer px-4 py-2">
              {col.label}
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2">
                  {item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
