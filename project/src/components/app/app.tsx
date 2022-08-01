import Main from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';

type AppProps = {
  promo: {
    title: string;
    genre: string;
    year: number;
  }
};

const App = ({ promo }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Main promo={promo} />} />
        <Route path='login' element={<SignIn />} />
        <Route path='mylist'
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path='films/:id'>
          <Route index element={<Film promo={promo} />} />
          <Route path='review' element={<AddReview />} />
        </Route>
        <Route path='player/:id' element={<Player />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
