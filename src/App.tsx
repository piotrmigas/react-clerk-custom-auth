import Header from './components/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { SignIn, UserProfile, SignedIn, SignedOut } from '@clerk/clerk-react';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Header />
      <main className='container mx-auto '>
        <div className='flex items-start justify-center min-h-screen'>
          <div className='mt-20'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sign-in/*' element={<SignIn routing='path' path='/sign-in' />} />
              <Route path='/sign-up/*' element={<Register />} />
              <Route
                path='/dashboard'
                element={
                  <>
                    <SignedIn>
                      <Dashboard />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to='/sign-in' />
                    </SignedOut>
                  </>
                }
              />
              <Route path='/user/*' element={<UserProfile routing='path' path='/user' />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
