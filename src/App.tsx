import styled from '@emotion/styled';
import { useTheme, Theme } from '@emotion/react';

const App = (): JSX.Element => {
  const theme: Theme = useTheme();

  const Body = styled('div')({
    width: '100%',
    backgroundColor: theme.colors.backgroundBlack,
    color: 'white',
    margin: '0',
    minHeight: '100vh',
  });

  const Header = styled('div')({
    width: '100%',
    height: '100px',
    margin: '0',
    backgroundColor: theme.colors.backgroundBlue,
    display: 'flex',
  });

  const HeaderText = styled('div')({
    display: 'inline-block',
    alignSelf: 'flex-end',
    paddingLeft: '30px',
  });

  const Main = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const MainText = styled('div')({
    textAlign: 'center',
  });

  const LibraryList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  });

  return (
    <div>
      <Body>
        <Header>
          <HeaderText>
            <h1>CRA Template</h1>
          </HeaderText>
        </Header>
        <Main>
          <MainText>
            <p>Hello World!</p>
            <p>This React template contains the following libraries:</p>
            <LibraryList>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>Jest</li>
              <li>Playwright</li>
              <li>Emotion</li>
              <li>React-Router</li>
            </LibraryList>
          </MainText>
        </Main>
      </Body>
    </div>
  );
};

export default App;
