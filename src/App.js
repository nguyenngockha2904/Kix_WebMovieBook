import React, { Fragment, Suspense, useMemo } from 'react';
import Header from './Layouts/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Layouts/Loading';
const MovieDetail = React.lazy(() => import('./Screens/MovieDetail'));
const Home = React.lazy(() => import('./Screens/Home'));
const BookMovieDetail = React.lazy(() => import('./Screens/BookMovieDetail'));
const SignIn = React.lazy(() => import('./Screens/SignIn'));
const SignUp = React.lazy(() => import('./Screens/signUp'));
const UserInfo = React.lazy(() => import('./Screens/userpage'));
const ErrorPage = React.lazy(() => import('./Screens/ErrorPage'));
function App() {
  const username = localStorage.getItem('username');
  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment><Loading /></Fragment>}>
        <Switch>
          <Route path='/detail/:maPhim' exact component={MovieDetail} />
          <Route path='/dangnhap' exact component={SignIn} />
          <Route path='/dangky' exact component={SignUp} />
          <Route path='/chitietphongve/:maLichChieu' exact >
            {username ? <BookMovieDetail /> : <ErrorPage role={1} />}
          </Route>
          <Route path='/thongtincanhan' exact >
            {username ? <UserInfo /> : <ErrorPage role={1} />}
          </Route>
          <Route path='/' exact component={Home} />
          <Route path="*">
            <ErrorPage role={0} />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
