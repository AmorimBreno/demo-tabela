import FormattedValue from '../helpers/formatedValue';

// Interface para os dados da tabela
interface TableRowData {
  name: string;
  y1: string;
  y3: string;
  y5: string;
  y7: string;
  y10: string;
  highlight?: boolean;
}

// Componente de Tabela Reutilizável
const PerformanceTable: React.FC<{ title: string; data: TableRowData[] }> = ({
  title,
  data,
}) => (
  <div className="bg-white border border-gray-300 rounded-xs shadow-sm overflow-hidden mb-8 font-sans">
    <div className="bg-gray-50 px-6 py-2 border-b border-gray-300">
      <h3 className="font-sans text-gray-800 text-[24px] tracking-wider font-bold">
        {title}
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className=" uppercase text-[10px] tracking-widest border-b border-gray-300 bg-gray-200/60">
            <th className="px-6 py-3 font-semibold"> </th>
            {['1 ano', '3 anos', '5 anos', '7 anos', '10 anos'].map((year) => (
              <th key={year} className="px-6 py-1 text-center font-semibold">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={
                row.highlight
                  ? 'bg-yellow-400/90 font-bold'
                  : 'odd:bg-gray-200/40 even:bg-white'
              }
            >
              <td
                className={`px-6 py-1 ${
                  row.highlight ? 'text-gray-900' : 'text-gray-600 '
                }`}
              >
                {row.name}
              </td>
              <td className="px-6 py-1 text-center ">
                <FormattedValue value={row.y1} />
              </td>
              <td className="px-6 py-1 text-center">
                <FormattedValue value={row.y3} />
              </td>
              <td className="px-6 py-1 text-center">
                <FormattedValue value={row.y5} />
              </td>
              <td className="px-6 py-1 text-center">
                <FormattedValue value={row.y7} />
              </td>
              <td className="px-6 py-1 text-center">
                <FormattedValue value={row.y10} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PerformanceTable;
export type { TableRowData };
