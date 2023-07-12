import styles from "./styles/CreateEvent.module.css"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import { EVENTS_ROUTE } from "../Utils/Consts"

const CreateEvent = () => {  
    const navigate = useNavigate()

    return (   
    <div>
        <NavBar/>    
            <div className={styles.page}>
            <div className={styles.input_fields}>
                <div className={styles.status_fields}>
                    <div className={styles.input_field_name}>Название</div>
                    <input className={styles.input_frame} type="text" name="event-name" placeholder="Введите название мероприятия"/>
                    <div className={styles.input_field_name}>Дата и время</div>
                    <input className={styles.input_frame} type="datetime-local" name="event-datetime" placeholder="Введите дату и время"/>
                    <div className={styles.input_field_name}>Длительность мероприятия</div>
                    <input className={styles.input_frame} type="text" name="event-duration" placeholder="Введите длительность мероприятия"/>
                    <div className={styles.input_field_name}>Количество участников</div>
                    <input className={styles.input_frame} type="text" name="event-participants" placeholder="Введите количество участников"/>
                </div>
                <div className={styles.desc_field}>
                    <div className={styles.input_field_name}>Описание</div>
                    <textarea maxLength="700" className={styles.desc_input_field} name="desc-field_frame"></textarea>
                </div>
            </div>
            <div className={styles.button_section}>
                <div onClick={() => navigate(EVENTS_ROUTE)} className={styles.create_button_frame}><div className={styles.create_button_text}>Создать событие</div></div>
            </div>
        </div>
    </div>
    )   
}

  export default CreateEvent;
  