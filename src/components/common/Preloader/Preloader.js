import loader from "../../../assets/image/loading.svg";
import s from './Proloader.module.css';

let Preloader = () => {
	return (
		<div className={s.preloader}>
			<img src={loader} alt='Preloader' title='Preloader'/>
		</div>
		)
};

export default Preloader;