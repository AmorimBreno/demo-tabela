import FormattedValue from '../helpers/formatedValue';

// Interface para as props do Card
interface MetricCardProps {
  title: string;
  value: string;
  label: string;
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
  <div
    className={`bg-white  border rounded-xs shadow-sm font-sans border-gray-300 ${
      details ? null : 'pb-2'
    }`}
  >
    <div className="flex items-center gap-2 mb-3 px-3 border-b py-2 border-gray-300">
      <div className=" bg-yellow-400 p-1 rounded-xs border border-gray-300">
        <Icon size={20} className="text-gray-900" />
      </div>
      <span className="font-bold text-xs tracking-wider text-[24px] text-gray-800">
        {title}
      </span>
    </div>
    <div className=" px-3 flex items-baseline gap-2">
      <span className="text-[32px] font-bold tracking-tight text-gray-900 w-[40%]">
        <FormattedValue value={value} />
      </span>
      <span className="bg-yellow-400 text-black text-[12px] px-2 py-0.5 rounded-xs font-bold">
        {label}
      </span>
    </div>
    {details && (
      <div className=" pt-4  text-xs  ">
        {details.map((d, i) => (
          <div
            key={i}
            className="flex justify-between px-3 border-t border-gray-300 bg-gray-100 h-full text-gray-700"
          >
            <span className="text-[16px] text-gray-700">{d.name}</span>
            <span className="text-[16px] text-gray-700">{d.val}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default MetricCard;
