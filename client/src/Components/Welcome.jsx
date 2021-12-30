import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './'

// function connectWallet(){
//     console.log('connecting wallet');
// }

const Input = ( {placeholder, name, type, value, handlechange} ) => {
    return(<div>
        <input
            placeholder={placeholder}
            type = {type}
            name = {name}
            step = "0.0001"
            value = {value}
            onChange = {(e) => handlechange(e, name)}
            className = "bg-transparent px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
    />
    </div>)
}

const Welcome = () => {
    const handlesubmit = () => {

    }
    return(
        <div className='flex relative bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 h-100'>
            <div className='font-bold w-100 h-20 px-20 py-20 mx-20 my-20'>
                Solidity! Blockchain! Web 3.0!
            </div>
            <div className='absolute flex-col top-0 right-0 px-10 py-10 mx-10 my-10'>
                <div>Form Heading</div>
                <Input placeholder="Address to" name ="Address to" type="text" />
                <Input placeholder="Amount (ETH)" name ="amount" type="number" />
                <Input placeholder="Keyword (GIF)" name ="keyword" type="text" />
                <Input placeholder="Enter message" name ="message" type="text" />
                <div className='bg-white-500 my-2 w-[10px] h-[1px]'></div>
                {false ? (
                    <Loader />
                ):(
                    <button type="button" onClick={handlesubmit} className='text-white bg-blue-500 px-4 py-3 rounded-full'>
                        Send now
                    </button>
                )
                }
            </div>
        </div>
    );
}

export default Welcome;