
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { Provider } from 'react-redux';
import GistList from './components/GistList';
import store from './redux/store';
import Search from './components/Search';
const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <GlobalStyles />
      <Provider store={store}>
      <div>
       
        <GistList />
      </div>
    </Provider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
