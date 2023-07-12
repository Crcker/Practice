import styles from './styles/Events.module.css'
import NavBar from "../components/NavBar"
import { useNavigate } from 'react-router-dom'
import { CREATE_EVENT_ROUTE, EVENT_DESCRIBE_ROUTE } from '../Utils/Consts'


const Events = () => {  

    const navigate = useNavigate()

    return ( 
        <div>
            <NavBar/>    
            <div className={styles.wrapper}>
                <div className={styles.event_menu}>
                    <div className={styles.button_section}>
                        <div onClick={() => navigate(CREATE_EVENT_ROUTE)} className={styles.create_button_frame}><div className={styles.create_button_text}>Создать событие</div></div>
                    </div>
                        <input className={styles.input_field_frame} type="text" name="event-search" placeholder="Поиск события..."/> 
                </div>
                <div className={styles.event_table}>
                    <div className={styles.event_table_names}>
                        <div className={styles.event_table_name}>Текущие события</div>
                        <div className={styles.event_table_names_right}>
                            <div className={styles.event_table_name}>Допущено</div>
                            <div className={styles.event_table_name}>Дата проведения</div>    
                        </div>
                    </div>
                    <div  onClick={() => navigate(EVENT_DESCRIBE_ROUTE)} className={styles.event_table_value}>
                        <div className={styles.event_table_name}>Тест</div>
                        <div className={styles.event_table_names_right}>
                            <div className={styles.event_table_name}>14/20</div>
                            <div className={styles.event_table_name}>21 Июня 2023 9:30</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

  export default Events;
  