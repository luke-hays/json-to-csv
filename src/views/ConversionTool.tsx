/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import styled from '@emotion/styled';

import useCsvJsonConverter from 'hooks/useCsvJsonConverter';

import TextArea from 'components/TextArea';
import Button from 'components/Button';
import Warning from 'components/Warning';

const ConversionContainer = styled('div')({
  display: 'flex',
  marginTop: '5px',
});

const ConversionTextArea = styled(TextArea)({});

const TextAreaLabel = styled('label')({
  display: 'flex',
  flexDirection: 'column',
});

const ConvertButton = styled(Button)({
  marginTop: '20px',
});

const ClearButton = styled(Button)({
  marginTop: '20px',
});

const ConversionTool = (): JSX.Element => {
  const [warning, setWarning] = useState('');

  const { json, updateJson, csv, parseToCsv, clearText } =
    useCsvJsonConverter();

  const convertBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    let message = '';

    try {
      parseToCsv(json);
    } catch (error) {
      if (error instanceof Error) message = error.message;
      else message = String(error);
    } finally {
      setWarning(message);
    }
  };

  const clearBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    clearText();
    setWarning('');
  };

  const updateTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    updateJson(e.currentTarget.value);
  };

  return (
    <>
      <h1>JSON to CSV Conversion Tool</h1>
      {warning ? <Warning key={warning} text={warning} /> : ''}
      <ConversionContainer>
        <TextAreaLabel htmlFor="json">
          JSON
          <ConversionTextArea
            id="json"
            name="json"
            rows={5}
            cols={20}
            onChange={updateTextArea}
            value={json}
          />
        </TextAreaLabel>
      </ConversionContainer>
      <ConversionContainer>
        <TextAreaLabel htmlFor="csv">
          CSV
          <ConversionTextArea
            readOnly
            id="csv"
            name="csv"
            rows={5}
            cols={20}
            value={csv}
          />
        </TextAreaLabel>
      </ConversionContainer>
      <ConvertButton type="button" onClick={convertBtnClick} name="convert">
        Convert
      </ConvertButton>
      <ClearButton type="button" onClick={clearBtnClick} name="clear">
        Clear
      </ClearButton>
    </>
  );
};

export default ConversionTool;
