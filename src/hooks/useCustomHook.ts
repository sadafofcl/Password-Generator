import { useState, useCallback, useEffect} from 'react';

export default function useCustomHook() {
    const [length, setLength] = useState<number>(0);
    const [numbersAllowed, setNumbersAllowed] = useState<boolean>(false);
    const [charSymbolAllowed, setCharSymbolAllowed] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const generatePassword = useCallback(():void=>{
        let pass: string="";
        let characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numbersAllowed) characters+= "0123456789";
        if(charSymbolAllowed) characters+= "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random()*characters.length+1);
            pass+=characters.charAt(char);
        }

        setPassword(pass);
     },
    [length, numbersAllowed, charSymbolAllowed, setPassword] );

    useEffect(()=>{
        generatePassword();
    }, [length, numbersAllowed, charSymbolAllowed, generatePassword]);


    return {
        length,
        setLength,
        numbersAllowed, 
        setNumbersAllowed,
        charSymbolAllowed,
        setCharSymbolAllowed,
        password,
        setPassword,
        generatePassword
    };

}