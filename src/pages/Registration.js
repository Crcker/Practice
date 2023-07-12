import styles from "./styles/Registration.module.css"


const Registration = () => {  


    return (   
       <div>
            <h1  className={styles.reg}>Регистрация на мероприятие</h1>
            <div className={styles.code}>
            <p>Пригласительный код</p>
            <form>
                <input className={styles.input_code} type="text" placeholder="Введите пригласительный код" />
            </form>
            </div>
                <p className={styles.org}>Организатор? <a  href="/login" className="entrance">Войти как админ</a></p>

                <a href="registration.html" className={styles.button}>ВХОД</a> 
        </div>     
    )   
}

  export default Registration;
  