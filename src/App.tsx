import React from 'react';
import { FaArrowTrendDown } from 'react-icons/fa6';
import { BiLineChart } from 'react-icons/bi';

interface FormattedValueProps {
  value: string;
}

// Componente para formatar cores de números negativos
const FormattedValue: React.FC<FormattedValueProps> = ({ value }) => {
  const isNegative = value.toString().includes('-');
  return (
    <span className={isNegative ? 'text-red-400 font-medium' : 'text-gray-700'}>
      {value}
    </span>
  );
};

// Interface para as props do Card
interface MetricCardProps {
  title: string;
  value: string;
  label: string;
  // O tipo React.ElementType permite passar o componente do ícone como prop
  icon: React.ElementType;
  details?: { name: string; val: string }[];
}

// Componente de Card da Lateral
const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  label,
  icon: Icon,
  details,
}) => (
  <div className="bg-white p-5 border rounded-xl shadow-sm border-l-4 border-l-yellow-400">
    <div className="flex items-center gap-2 text-gray-500 mb-3">
      <Icon size={20} className="text-yellow-500" />
      <span className="font-bold text-xs uppercase tracking-wider">
        {title}
      </span>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold tracking-tight text-gray-800">
        <FormattedValue value={value} />
      </span>
      <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
        {label}
      </span>
    </div>
    {details && (
      <div className="mt-4 pt-4 border-t text-xs text-gray-400 space-y-2">
        {details.map((d, i) => (
          <div key={i} className="flex justify-between">
            <span>{d.name}</span>
            <span className="font-medium text-gray-600">{d.val}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

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
  <div className="bg-white border rounded-xs shadow-sm overflow-hidden mb-8 font-sans">
    <div className="bg-gray-50 px-6 py-2 border-b">
      <h3 className="font-sans text-gray-800 text-[24px] tracking-wider font-bold">
        {title}
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className=" uppercase text-[10px] tracking-widest border-b bg-gray-200/60">
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

export default function App() {
  const nominalData: TableRowData[] = [
    {
      name: 'IBOV',
      y1: '33.95%',
      y3: '13.64%',
      y5: '6.25%',
      y7: '9.04%',
      y10: '14.03%',
      highlight: true,
    },
    {
      name: 'Média',
      y1: '6.26%',
      y3: '6.02%',
      y5: '7.06%',
      y7: '8.25%',
      y10: '7.45%',
    },
    {
      name: 'Desv Pad',
      y1: '3.35%',
      y3: '2.66%',
      y5: '1.82%',
      y7: '1.15%',
      y10: '0.39%',
    },
    {
      name: 'Mínima',
      y1: '-33.05%',
      y3: '-15.29%',
      y5: '-11.76%',
      y7: '-1.99%',
      y10: '-0.87%',
    },
    {
      name: 'Máxima',
      y1: '78.17%',
      y3: '36.94%',
      y5: '26.15%',
      y7: '17.24%',
      y10: '14.03%',
    },
  ];

  const cdiData: TableRowData[] = [
    {
      name: 'IBOV',
      y1: '17.18%',
      y3: '0.82%',
      y5: '-4.24%',
      y7: '0.02%',
      y10: '4.29%',
      highlight: true,
    },
    {
      name: 'Média',
      y1: '6.26%',
      y3: '6.02%',
      y5: '7.06%',
      y7: '8.25%',
      y10: '-1.44%',
    },
    {
      name: 'Desv Pad',
      y1: '16.36%',
      y3: '9.66%',
      y5: '7.51%',
      y7: '4.56%',
      y10: '2.28%',
    },
    {
      name: 'Mínima',
      y1: '-36.56%',
      y3: '-23.53%',
      y5: '-20.09%',
      y7: '-11.55%',
      y10: '-9.63%',
    },
    {
      name: 'Máxima',
      y1: '74.25%',
      y3: '24.56%',
      y5: '17.19%',
      y7: '8.63%',
      y10: '4.29%',
    },
  ];

  const ipcaData: TableRowData[] = [
    {
      name: 'IBOV',
      y1: '28.46%',
      y3: '8.68%',
      y5: '0.33%',
      y7: '3.39%',
      y10: '8.47%',
      highlight: true,
    },
    {
      name: 'Média',
      y1: '0.54%',
      y3: '0.19%',
      y5: '1.13%',
      y7: '2.42%',
      y10: '1.56%',
    },
    {
      name: 'Desv Pad',
      y1: '17.23%',
      y3: '10.28%',
      y5: '7.60%',
      y7: '4.14%',
      y10: '2.45%',
    },
    {
      name: 'Mínima',
      y1: '-35.37%',
      y3: '-21.38%',
      y5: '-17.61%',
      y7: '-8.21%',
      y10: '-6.20%',
    },
    {
      name: 'Máxima',
      y1: '68.30%',
      y3: '31.60%',
      y5: '21.02%',
      y7: '11.38%',
      y10: '8.47%',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 ml-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Relatório de Performance
          </h1>
          <p className="text-sm text-gray-500">
            Análise comparativa de fundos e benchmarks
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Cards */}
          <aside className="w-full lg:w-80 space-y-6 shrink-0">
            <MetricCard
              title="Retorno"
              value="5.48%"
              label="CAGR"
              icon={FaArrowTrendDown}
              details={[
                { name: 'CDI', val: '3.84%' },
                { name: 'IPCA', val: '0.27%' },
              ]}
            />
            <MetricCard
              title="Pior Drawdown"
              value="-20.97%"
              label="Janelas de 1 ano"
              // Usei uma seta de tendência de baixa para ficar mais semântico
              icon={FaArrowTrendDown}
            />
            <MetricCard
              title="Volatilidade"
              value="20.27%"
              label="Média 21 DU"
              // Ícone de gráfico de linha
              icon={BiLineChart}
            />
          </aside>

          {/* Área Principal das Tabelas */}
          <main className="flex-1 min-w-0">
            <PerformanceTable title="Retorno Nominal" data={nominalData} />

            {/* Reutilizando os dados apenas para exemplo visual */}
            <PerformanceTable title="CDI+" data={cdiData} />
            <PerformanceTable title="IPCA+" data={ipcaData} />
          </main>
        </div>
      </div>
    </div>
  );
}
