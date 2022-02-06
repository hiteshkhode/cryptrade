import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './'

import { useState, useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

const Input = ( {placeholder, name, type, value, handleChange} ) => {
    return(<div>
        <input
            placeholder={placeholder}
            type = {type}
            name = {name}
            step = "0.0001"
            value = {value}
            onChange = {(e) => handleChange(e, name)}
            className = "bg-transparent px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline text-white"
    />
    </div>)
}

const Welcome = () => {
    const {connectWallet, currentAccount, formData, sendTransaction, handleChange, getAllTransactions} = useContext(TransactionContext);

    const handlesubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message){
            alert("Please fill all the fields");
        }else{
            sendTransaction();
        }
    }
    return(
        <div className='flex relative bg-gradient-to-r from-red-200 to-red-600 h-[700px]'>
            <div className='font-bold w-100 h-20 px-20 py-20 mx-20 my-20 text-center'>
                Solidity! Blockchain! Web 3.0! <br />
                {!currentAccount ? (
                    <button type="button" onClick={connectWallet} className='text-white bg-blue-500 px-4 py-3 rounded-full'>
                        Connect Wallet
                    </button>
                ):(
                <div className='text-white bg-blue-500 px-4 py-3 rounded-full cursor-pointer text-center' onClick={getAllTransactions}>
                    Get all transactions.
                </div>
            )}
            </div>
            <div className='absolute flex-col top-0 right-0 px-10 py-10 mx-10 my-10'>
                <div className='font-bold text-beige'>Ethereum Postman</div>
                <Input placeholder="address to" name ="addressTo" type="text" handleChange={handleChange} />
                <Input placeholder="Amount (ETH)" name ="amount" type="number" handleChange={handleChange} />
                <Input placeholder="Keyword (GIF)" name ="keyword" type="text" handleChange={handleChange} />
                <Input placeholder="Enter message" name ="message" type="text" handleChange={handleChange} />
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