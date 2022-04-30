/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from '@emotion/styled';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
// import Warning from "components/Warning";

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
  width: 'fit-content',
});

const ConversionTool = (): JSX.Element => {
  return (
    <>
      <h1>JSON to CSV Conversion Tool</h1>
      <ConversionContainer>
        <TextAreaLabel htmlFor="json">
          JSON
          <ConversionTextArea id="json" name="json" rows={5} cols={20} />
        </TextAreaLabel>
      </ConversionContainer>
      <ConversionContainer>
        <TextAreaLabel htmlFor="csv">
          CSV
          <ConversionTextArea id="csv" name="csv" rows={5} cols={20} />
        </TextAreaLabel>
      </ConversionContainer>
      <ConvertButton>Convert</ConvertButton>
    </>
  );
};

export default ConversionTool;
