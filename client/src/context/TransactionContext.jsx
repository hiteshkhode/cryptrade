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

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormdata] = useState({ addressTo: "", amount: "", keyword: "", message: "" });

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

        }catch(error){
            console.log(error);
            throw new Error("no ethereum object.")
        }
    }
    

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{marks: 'twenty', connectWallet, currentAccount, formData, setFormdata, sendTransaction, handleChange}}>
            {children}
        </TransactionContext.Provider>
    )
}