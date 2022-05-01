import { useState } from 'react';

interface useJsonReturn {
  json: string;
  setJson: React.Dispatch<React.SetStateAction<string>>;
}

const useJson = (): useJsonReturn => {
  const [json, setJson] = useState('');

  return { json, setJson };
};

export default useJson;
