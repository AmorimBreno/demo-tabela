import {
  FaAnglesDown,
  FaArrowTrendDown,
  FaCircleMinus,
  FaPercent,
} from 'react-icons/fa6';
import { BiLineChart } from 'react-icons/bi';
import MetricCard from './components/card';
import type { TableRowData } from './components/PerformanceTable';
import PerformanceTable from './components/PerformanceTable';

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

  const detailsData: TableRowData[] = [
    {
      name: '% acima CDI',
      y1: '39.01%',
      y3: '34.91%',
      y5: '41.56%',
      y7: '53.88%',
      y10: '26.85%',
    },
    {
      name: '% acima IPCA',
      y1: '45.28%',
      y3: '44.43%',
      y5: '60.15%',
      y7: '75.65%',
      y10: '71.55%',
    },
    {
      name: '# observações',
      y1: '3889',
      y3: '3369',
      y5: '2851',
      y7: '2333',
      y10: '1557',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 ml-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Relatório de Performance
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-80 space-y-16 shrink-0">
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
              title="Pior Drawdown - Média"
              value="-20.97%"
              label="Janelas de 1 ano"
              icon={FaAnglesDown}
            />
            <MetricCard
              title="Volatilidade"
              value="20.27%"
              label="Média 21 DU"
              icon={BiLineChart}
            />
            <MetricCard
              title="Pior Retorno"
              value="-15.29%"
              label="Média 21 DU"
              icon={FaCircleMinus}
            />
            <MetricCard
              title="Acima CDI"
              value="41.6%"
              label="Média 21 DU"
              icon={FaPercent}
            />
          </aside>

          <main className="flex-1 min-w-0">
            <PerformanceTable title="Retorno Nominal" data={nominalData} />
            <PerformanceTable title="CDI+" data={cdiData} />
            <PerformanceTable title="IPCA+" data={ipcaData} />
            <PerformanceTable title="Detalhes" data={detailsData} />
          </main>
        </div>
      </div>
    </div>
  );
}
