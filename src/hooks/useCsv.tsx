import { useState } from 'react';

const useCsv = (): any => {
  const [csv, setCsv] = useState('');

  return { csv, setCsv };
};

export default useCsv;
