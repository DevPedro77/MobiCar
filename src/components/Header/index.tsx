import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiUser, FiLogIn} from "react-icons/fi";

function Header() {
  const signed = false;
  const loadingAuth = false;


  return (
    <div className='w-full flex itens-center justify-center h-16 bg-white drop-shadow mb-4'>
      <header className='flex w-full max-w-7xl itens-center  justify-between px-4'>
        <Link to="/">
          <img src={logoImg} alt="Logo do site" />
        </Link>

      {!loadingAuth && signed && (
        <Link to="/dashboard">
          <div className="border-2 rounded-full p-1 border-gray-900">
            <FiUser size={24} color="#000" />
          </div>
        </Link>
      )}
      {!loadingAuth && !signed && (
        <Link to="/login">
          <div className="border-2 rounded-full p-1 border-gray-900">
            <FiLogIn size={24} color="#000" />
          </div>
        </Link>
      )}
      </header>
    </div>
  )
}


export default Header;