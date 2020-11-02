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
function App() {
  const isPage = useSelector((state) => {
    return state.parent.isPage.role
  });

  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment><Loading /></Fragment>}>
        <Switch>
          <Route path='/detail/:maPhim' exact component={MovieDetail} />
          <Route path='/chitietphongve/:maLichChieu' exact component={BookMovieDetail} />
          <Route path='/dangnhap' exact component={SignIn} />
          <Route path='/dangky' exact component={SignUp} />
          <Route path='/thongtincanhan' exact component={UserInfo} />
          <Route path='/' component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
