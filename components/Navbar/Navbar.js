import { useRouter } from 'next/router';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Button from './Button/Button';

export default function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };
  return (
    <div className="flex xl:pt-[4%] lg:pt-[4%] md:pt-[4%]  sm:pt-[4%] items-center overflow-hidden relative">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="xl:w-1/3 lg:w-[40%] md:w-[40%] sm:w-[50%] space-x-5 text-right">
        {/* <Button variant="white" onClick={handleLogin} >Login</Button>
        <Button variant="white" onClick={handleRegister}>Register</Button> */}
        <button
          className="xl:text-lg xl:py-3 xl:px-10 lg:text-lg lg:py-3 lg:px-8 md:px-6 md:text-md md:py-2.5 sm:px-6 sm:text-sm sm:py-2.5 rounded-2.5xl inline-block bg-white"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="xl:text-lg xl:py-3 xl:px-10 lg:text-lg lg:py-3 lg:px-8 md:px-6 md:text-md md:py-2.5 sm:px-6 sm:text-sm sm:py-2.5 rounded-2.5xl inline-block bg-white"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}