import { useState } from 'react';

interface useCsvReturn {
  csv: string;
  setCsv: React.Dispatch<React.SetStateAction<string>>;
}

const useCsv = (): useCsvReturn => {
  const [csv, setCsv] = useState('');

  return { csv, setCsv };
};

export default useCsv;
