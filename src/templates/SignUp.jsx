import React,{useState,useCallback} from 'react';
import {TextInput} from '..conponents/UIkit';

const SignUp = () => {
    const   [username,setUsername] = useState(""),
            [email, setEmail] = useState(""),
            [password, setPassword] = useState(""),
            [confimPassword, setconfimPassword] = useState("");
    
    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    },[setUsername])

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail])

    const inputPasswprd = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword])

    const inputConfimPassword = useCallback((event) => {
        setconfimPassword(event.target.value)
    }, [setconfimPassword])
    return (
        <div className= "c-section-container">
            <h2 className= "u-text_headline u-text-center">アカウント登録</h2>
            <div className= "module-spacer--medium" />
            {/* ユーザー名 */}
            <TextInput 
                fullWidth= {true} label= {"ユーザー名"} multiline= {false} required= {true}
                rows={1} value={username} type={text} onChange={inputUsername}
            />
            {/* メールアドレス */}
            <TextInput
                fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} type={email} onChange={inputEmail}
            />
            {/* パスワード */}
            <TextInput
                fullWidth={true} label={"パスワード"} multiline={false} required={true}
                rows={1} value={password} type={password} onChange={inputPasswprd}
            />
            {/* 確認用パスワード */}
            <TextInput
                fullWidth={true} label={"確認用パスワード"} multiline={false} required={true}
                rows={1} value={confimPassword} type={password} onChange={inputConfimPassword}
            />

        </div>
    )
}

export default SignUp
