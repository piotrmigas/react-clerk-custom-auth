import { useUser } from '@clerk/clerk-react';

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Dashboard</h1>
      <p className='mb-5'>
        Welcome {user?.firstName} {user?.lastName}!
      </p>
    </>
  );
}
