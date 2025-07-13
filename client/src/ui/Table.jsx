function Table({ head, children }) {
  return (
    <table className="mt-5 w-[100%] table-auto border-separate border-spacing-0 rounded-lg border-1 border-gray-700">
      <thead className="bg-[#283039]">
        <tr>
          {head.map((el, index) => (
            <th
              className="border-b-1 border-gray-700 p-5 text-start text-xl text-[#c9fa75] first:rounded-tl-lg last:rounded-tr-lg last:text-center"
              key={index}
            >
              {el}
            </th>
          ))}
        </tr>
        {children}
      </thead>
      <tbody></tbody>
    </table>
  );
}
export default Table;
