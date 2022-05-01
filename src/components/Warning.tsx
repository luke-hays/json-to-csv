import styled from '@emotion/styled';

const WarningContainer = styled('div')({
  height: 'fit-content',
  width: 'fit-content',
  color: 'red',
  marginBottom: '20px',
});

interface warningProps {
  text: string;
}

const Warning = ({ text }: warningProps): JSX.Element => {
  return <WarningContainer>{text}</WarningContainer>;
};

export default Warning;
