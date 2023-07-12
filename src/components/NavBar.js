import { useNavigate } from "react-router-dom";
import { CREATE_EVENT_ROUTE, EVENTS_ROUTE } from "../Utils/Consts";
import styles from "./styles/NavBar.module.css"
import React, { useContext } from "react";
import { Context } from "..";

const NavBar = () => {  
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (   
        <div className={styles.navbar}>
            <div onClick={() => navigate(CREATE_EVENT_ROUTE)} className={styles.navbar_button}><div className={styles.navbar_button_text}>Создать событие</div></div>
            <div onClick={() => navigate(EVENTS_ROUTE)} className={styles.navbar_button}><div className={styles.navbar_button_text}>События</div></div>
            <div onClick={() => logOut()} className={styles.navbar_button}><div className={styles.navbar_button_text}>Выход</div></div>
        </div>     
    )   
}

  export default NavBar;
  