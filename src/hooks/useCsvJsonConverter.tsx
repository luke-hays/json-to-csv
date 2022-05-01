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

  const parseJsonObjToCsv = (jsonObj: object): string => {
    const headers = Object.keys(jsonObj);
    const values = Object.values(jsonObj);

    let csvText = '';

    headers.forEach((element) => {
      csvText += `${element},`;
    });

    csvText = csvText.slice(0, csvText.length - 1);
    csvText += '\n';

    values.forEach((element) => {
      let val = String(element);

      if (Array.isArray(element)) {
        val = `[${String(element)}]`;
      } else {
        val = String(element);
      }

      csvText += `${val},`;
    });

    csvText = csvText.slice(0, csvText.length - 1);

    return csvText;
  };

  const stripWhiteSpace = (text: string): string => {
    return text.replace(/\s+/g, '');
  };

  const updateJson = (text: string): void => {
    setJson(text);
  };

  const parseToCsv = (text: string): void => {
    if (!text || stripWhiteSpace(text) === '{}') throw new Error('Empty Json');

    let csvText = '';

    try {
      const jsonObj = JSON.parse(stripWhiteSpace(text));
      csvText = parseJsonObjToCsv(jsonObj);
    } finally {
      setCsv(csvText);
    }
  };

  const clearText = (): void => {
    setJson('');
    setCsv('');
  };

  return { json, updateJson, csv, parseToCsv, clearText };
};

export default useCsvJsonConverter;
