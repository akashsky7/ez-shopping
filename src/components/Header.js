import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBag } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    console.log(user)
    function handleAuthentication(){
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
    <Link to="/" style={{textDecoration: 'none', display: 'flex'}}>
        <img className='header__logo' src='https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG3.png' alt='' />
        <p className='header__brandname'>EzShopping</p>
    </Link>
        <div className="header__search">
            <input className='header__searchInput' type="text" placeholder='search' />
            <SearchIcon className='header__searchIcon' />
            {/*search-logo*/}
        </div>
        <div className="header__nav">
            <Link to={!user && '/login'} style={{textDecoration: 'none', color: 'black'}}>
                <div className='header__option' onClick={handleAuthentication}>
                    <span className='header__optionLineOne'>Hello {user? user.email: 'Guest'}</span>
                    <span className='header__optionLineTwo'>{user?'Sign Out': 'Sign In'}</span>
                </div>
            </Link>
            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
            </div>

        </div>
        <Link to="/checkout" style={{textDecoration: 'none', color: 'black'}}>
            <div className="header__optionBasket">
                <ShoppingBag />
                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
        </Link>
    </div>
  )
}

export default Header