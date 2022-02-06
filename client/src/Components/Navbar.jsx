import logo from '../images/logo.png';


const Navbar = () => {
    return(
        <div className='w-full flex relative bg-gradient-to-l from-gray-700 via-gray-900 to-black'>
            <div className='mx-3 my-3'>
                <img src={logo} alt="" />
            </div>
            <div className='flex absolute right-0 bottom-0 my-5'>
                <div className='mx-3 cursor-pointer text-white'>Market</div>
                <div className='mx-3 cursor-pointer text-white'>Exchange</div>
                <div className='mx-3 cursor-pointer text-white'>Tutorial</div>
                <div className='mx-3 cursor-pointer text-white'>Wallet</div>
                <div className='mx-10 bg-gray-500 text-white px-5 py-2 rounded-full cursor-pointer'>Login</div>
            </div>
        </div>
    );
}

export default Navbar;