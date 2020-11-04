import React, { Fragment, Suspense, useEffect, useMemo, useState } from 'react';
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

  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment><Loading /></Fragment>}>
        <Switch>
          <Route path='/detail/:maPhim' exact component={MovieDetail} />
          <Route path='/dangnhap' exact component={SignIn} />
          <Route path='/dangky' exact component={SignUp} />
          <Route path='/chitietphongve/:maLichChieu' component={BookMovieDetail} />
          <Route path='/thongtincanhan' exact component={UserInfo} />
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
