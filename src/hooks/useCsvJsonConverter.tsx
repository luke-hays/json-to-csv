import useJson from './useJson';
import useCsv from './useCsv';

const useCsvJsonConverter = (): any => {
  const { json, setJson } = useJson();
  const { csv, setCsv } = useCsv();

  const updateJson = (text: string): void => {
    setJson(text);
  };

  const parseToCsv = (text: string): void => {
    setCsv(text);
  };

  const clearText = (): void => {
    setJson('');
    setCsv('');
  };

  return { json, updateJson, csv, parseToCsv, clearText };
};

export default useCsvJsonConverter;
