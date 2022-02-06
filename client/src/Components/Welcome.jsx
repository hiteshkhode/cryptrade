import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './'
import Footer from './Footer'

import { useState, useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

const Input = ({ placeholder, name, type, value, handleChange }) => {
    return (<div>
        <input
            placeholder={placeholder}
            type={type}
            name={name}
            step="0.0001"
            value={value}
            onChange={(e) => handleChange(e, name)}
            className="bg-transparent px-4 py-2 rounded-lg text-black focus:outline-none focus:shadow-outline text-white"
        />
    </div>)
}

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, getAllTransactions } = useContext(TransactionContext);

    const handlesubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) {
            alert("Please fill all the fields");
        } else {
            sendTransaction();
        }
    }
    return (
        <div className='flex flex-col justify-center relative bg-gradient-to-r from-red-200 to-red-600 pb-40'>
            <div className='font-bold w-100 h-20 px-20 py-20 mx-20 my-20 text-center'>
                <div className='mb-7 text-3xl'>
                    Solidity! Blockchain! Web 3.0!
                </div>
                {!currentAccount ? (
                    <button type="button" onClick={connectWallet} className='text-white bg-blue-500 px-4 py-3 rounded-full'>
                        Connect Wallet
                    </button>
                ) : (
                    <div className='text-white bg-blue-500 px-4 py-3 rounded-full cursor-pointer text-center' onClick={getAllTransactions}>
                        Get all transactions.
                    </div>
                )}
                </div>
                <div className='transactionform flex-col text-white justify-center text-center mx-10 my-10 py-10 px-20 ml-auto mr-auto rounded-2xl'>
                    <div className='font-bold text-whiteclassName="inputfields"  text-3xl pb-10'>
                        Ethereum Postman
                    </div>
                    <div className='inputfieldswithbutton'>
                        <Input className="inputfields" placeholder="address to" name="addressTo" type="text" handleChange={handleChange} />
                        <Input className="inputfields" placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input className="inputfields" placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
                        <Input className="inputfields" placeholder="Enter message" name="message" type="text" handleChange={handleChange} />
                        <div className='bg-black ml-auto mr-auto my-10 w-40 h-1'>

                        </div>
                        {false ? (  
                            <Loader />
                        ) : (
                            <button type="button" onClick={handlesubmit} className='text-white bg-blue-500 px-4 py-3 rounded-full'>
                                Send now
                            </button>
                        )
                        }
                    </div>
            </div>
        </div>
    );
}

export default Welcome;