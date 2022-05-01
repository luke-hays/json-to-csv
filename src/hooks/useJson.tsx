import { useState } from 'react';

const useJson = (): any => {
  const [json, setJson] = useState('');

  return { json, setJson };
};

export default useJson;
