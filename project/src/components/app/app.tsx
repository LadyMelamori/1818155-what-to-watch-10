import Main from '../../pages/main/main';

type AppProps = {
  promo: {
    title: string;
    genre: string;
    year: number;
  }
};

const App = ({promo}: AppProps) => <Main promo={promo} />;

export default App;
