import './App.css';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import { createContext, useState } from 'react';
import Protected from './utils/Protected';
import Register from './components/Register';

export const signContext=createContext()

function App() {
  const [issignedin, setIssignedin]=useState(false);

  return (
    <>
      <signContext.Provider value={{issignedin,setIssignedin}}>
        <BrowserRouter >
          <Routes>
            <Route path='/' element={
              <>
              <Header/>
              <Home/>
              <Footer />
              </>
            }></Route>
            <Route path='/courses' element={
              <Protected>
                <>
              <Header/>
              <Courses/>
              <Footer />
              </>
              </Protected>
            }></Route>
            <Route path='/login' element={
              <>
              <Header/>
              <Login/>
              <Footer />
              </>
            }></Route>
            <Route path='/register' element={
              <>
              <Header/>
              <Register/>
              <Footer />
              </>
            }></Route>
          </Routes>
        </BrowserRouter>
      </signContext.Provider>
    </>
  );
}

export default App;
