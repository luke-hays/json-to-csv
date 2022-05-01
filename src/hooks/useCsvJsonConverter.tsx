import useJson from './useJson';
import useCsv from './useCsv';

interface useCsvJsonConverterReturn {
  json: string;
  csv: string;
  updateJson(text: string): void;
  parseToCsv(text: string): void;
  clearText(): void;
}

const useCsvJsonConverter = (): useCsvJsonConverterReturn => {
  const { json, setJson } = useJson();
  const { csv, setCsv } = useCsv();

  const updateJson = (text: string): void => {
    setJson(text);
  };

  const parseToCsv = (text: string): void => {
    if (!text) throw new Error('Empty Json');
    setCsv(text);
  };

  const clearText = (): void => {
    setJson('');
    setCsv('');
  };

  return { json, updateJson, csv, parseToCsv, clearText };
};

export default useCsvJsonConverter;
