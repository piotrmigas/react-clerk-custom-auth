import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

export default function Header() {
  const { user } = useUser();

  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-blue-700'>
      <div className='flex items-center'>
        <Link to='/'>
          <div className='text-lg font-bold text-white uppercase'>Clerk App</div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!user && (
          <>
            <Link to='sign-in' className='text-gray-300 hover:text-white mr-4'>
              Sign In
            </Link>
            <Link to='sign-up' className='text-gray-300 hover:text-white mr-4'>
              Sign Up
            </Link>
          </>
        )}
        {user && (
          <Link to='user' className='text-gray-300 hover:text-white mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
}
