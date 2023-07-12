import NavBar from "../components/NavBar";
import styles from "./styles/UserDescribe.module.css"

const UserDescribe = () => {  


    return ( 
	<div>  
		<NavBar/>
		<div className={styles.page}>
			<div className={styles.top_content}>
				<div className={styles.route_links}>
					<div className={styles.prev_page_link}>События</div>
					<div className={styles.arrow}>{'>'}</div>
					<div className={styles.prev_page_link}>Тест</div>
					<div className={styles.arrow}>{'>'}</div>
					<div className={styles.curr_user_name}>Иван Иванович Иванов</div>
				</div>
				<div className={styles.main_info}>
					<div className={styles.user_name}>Иван Иванович Иванов</div>
					<div className={styles.date_of_reg}>Добавлен 4 мая 2023 - 9:00</div>
				</div>
			</div>
			<div className={styles.bottom_content}>
				<div className={styles.info_title}>Информация о госте</div>
				<div className={styles.guest_info}>
					<div className={styles.concrete_info_wrapper}>
						<div className={styles.concrete_info_title}>Школа</div>
						<div className={styles.concrete_info}>Лицей Мегатех</div>
					</div>
					<div className={styles.concrete_info_wrapper}>
						<div className={styles.concrete_info_title}>Пол</div>
						<div className={styles.concrete_info}>Мужской</div>
					</div>
					<div className={styles.concrete_info_wrapper}>
						<div className={styles.concrete_info_title}>Дата рождения</div>
						<div className={styles.concrete_info}>01.01.2005</div>
					</div>
					<div className={styles.concrete_info_wrapper}>
						<div className={styles.concrete_info_title}>Email</div>
						<div className={styles.concrete_info}>example@mail.ru</div>
					</div>
					<div className={styles.concrete_info_wrapper}>
						<div className={styles.concrete_info_title}>Телеграм</div>
						<div className={styles.concrete_info}>@example</div>
					</div>														
				</div>
			</div>
		</div>
	</div>
    )   
}

  export default UserDescribe;
  