import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const{ ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

const getAllTransactions = async (transactionContract) => {
    try {
        if(!ethereum) return alert("Please connect to MetaMask");
        const transactionContract = getEthereumContract();
        // const availableTransactions = transactionContract.getAllTransactions();
        // console.log(availableTransactions);
        transactionContract.getAllTransactions().then(console.log);

    }catch(err){
        console.log(err);
    }
}


export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormdata] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(0);
    const handleChange = (e, name) => {
        setFormdata((prevState) => ({ ...formData, [name]: e.target.value }));
        console.log(formData);
    }

    const checkIfWalletIsConnected = async () => {
        if (!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({method: "eth_accounts"});
    }

    const connectWallet = async() => {
        try{
            if(!ethereum) return alert("please install metamask");
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0]);
        }catch(error){
            console.log(error);
            throw new Error("no ethereum object.")
        }
    }

    const sendTransaction = async() => {
        try{
            if(!ethereum) return alert("please install metamask");
            const {addressTo, amount, keyword, message} = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            console.log(currentAccount)
            await ethereum.request({method: "eth_sendTransaction", params: [{
                from: currentAccount,
                to: addressTo,
                gas: "0x5208",
                value: parsedAmount._hex
            }]});

            const transactionhash = await transactionContract.addToBlockchain( addressTo, parsedAmount, message, keyword)

            setIsLoading(true);
            console.log(`loading ${transactionhash.hash}`);
            await transactionhash.wait();
            setIsLoading(false);
            console.log(`transaction ${transactionhash.hash} is done`);
            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());

        }catch(error){
            console.log(error);
            throw new Error("no ethereum object.")
        }
    }
    

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormdata, sendTransaction, handleChange, getAllTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}