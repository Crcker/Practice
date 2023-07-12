import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./styles/EventDescribe.module.css"
import { USER_DESCRIBE_ROUTE } from "../Utils/Consts";

const EventDescribe = () => {  

	const navigate = useNavigate()

    return (
	<div>   
		<NavBar/>
		<div className={styles.page}>
			<div className={styles.top_content}>
				<div className={styles.name_and_datetime}>
					<div className={styles.name}>Тест</div>
					<div className={styles.datetime}>21 Июня 2023 9:30</div>
				</div>
				<div className={styles.desc_and_addbuttons}>
					<div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
					<div className={styles.addbuttons}>
						<div className={styles.addbutton}><div className={styles.button_text}>Загрузить участника</div></div>
						<div className={styles.addbutton}><div className={styles.button_text}>Загрузить .csv</div></div>
					</div>
				</div>
			</div>
			<div className={styles.bottom_content}>
				<div className={styles.filter}>
					<div className={styles.filter_buttons}>
						<div className={styles.save_button}><div className={styles.button_text}>Сохранить</div></div>
						<div className={styles.filter_button_wrapper}>
							<div className={styles.filter_button}>
								<div className={styles.button_text}>Школьники</div>
							</div>
							<div className={styles.filter_button}>
								<div className={styles.button_text}>Студенты</div>
							</div>
							<div className={styles.filter_button}>
								<div className={styles.button_text}>Сотрудники</div>
							</div>
						</div>
					</div>
					<input id="name" type="text" className={styles.search_field} placeholder="Поиск участника..." />
				</div>
				<div className={styles.participants_list}>
					<div className={styles.name_of_fields}>
						<div className={styles.field_name}>ФИО</div>
						<div className={styles.field_name}>Учереждение</div>
						<div className={styles.field_name}>Пол</div>
						<div className={styles.field_name}>Дата рождения</div>
						<div className={styles.field_name}>Почта</div>
						<div className={styles.field_name}>Допущен</div>
					</div>
					<div className={styles.participant}>
						<div onClick={() => navigate(USER_DESCRIBE_ROUTE)} className={styles.info}>
							<div className={styles.info_name}>Иван Иванович Иванов</div>
							<div className={styles.info_name}>Мегатех</div>
							<div className={styles.info_name}>Мужской</div>
							<div className={styles.info_name}>01.01.2005</div>
							<div className={styles.info_name}>example@mail.ru</div>
						</div>
						<div className={styles.checkbox_wrapper}>
							<input type="checkbox" className={styles.checkbox}/>
						</div>
					</div>
					</div>					
				</div>
			</div> 
			</div>			 
    )   
}

  export default EventDescribe;
  