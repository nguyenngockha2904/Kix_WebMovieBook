import React, { Suspense } from 'react';
import Header from './Layouts/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MovieDetail = React.lazy(() => import('./Screens/MovieDetail'));
const Home = React.lazy(() => import('./Screens/Home'));
const BookMovieDetail = React.lazy(() => import('./Screens/BookMovieDetail'));
const SignIn = React.lazy(() => import('./Screens/SignIn'));
const SignUp = React.lazy(() => import('./Screens/signUp'));
function App() {
  const isPage = useSelector((state) => {
    return state.parent.isPage.role
  });
  return (
    <BrowserRouter>
      {/* (isPage === 1 || isPage === 2) && <Header /> */}
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path='/detail/:maPhim' exact component={MovieDetail} />
          <Route path='/chitietphongve/:maLichChieu' exact component={BookMovieDetail} />
          <Route path='/dangnhap' exact component={SignIn} />
          <Route path='/dangky' exact component={SignUp} />
          <Route path='/' component={Home} />
        </Switch>
      </Suspense>
      {/* <Suspense fallback={<div></div>}>
        <Switch>
          <Route path='/' component={BookMovieDetail} />
        </Switch>
      </Suspense> */}
    </BrowserRouter>

  );
}

export default App;
