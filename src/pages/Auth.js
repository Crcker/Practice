import { EVENTS_ROUTE } from "../Utils/Consts";
import styles from "./styles/Auth.module.css"
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "..";


const Auth = () => {  
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logIn = () => {
        user.setUser({})
        user.setIsAuth(true)
        navigate(EVENTS_ROUTE)
    }
    return (   
        <div class={styles.page}>
            <div class={styles.page_title}>Вход</div>
            <div class={styles.input_fields}>
            <div class={styles.input_field_name}>Адрес электронной почты</div>
            <input class={styles.input_field_frame} type="text" name="mail-adress" placeholder="Введите адрес электронной почты"/>
            <div class={styles.input_field_name}>Пароль</div>
            <input class={styles.input_field_frame} type="text" name="password" placeholder="Введите пароль"/>
            <div class={styles.login_button}>
                <div  onClick={() => logIn()} class={styles.login_button_frame}><div class={styles.login_button_text} >ВХОД</div></div>
            </div>
        </div>
        
        </div>
    )   
}

  export default Auth;
  