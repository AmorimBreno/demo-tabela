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

export default FormattedValue;
