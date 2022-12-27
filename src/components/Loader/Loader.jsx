import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Hearts } from 'react-loader-spinner'
import { LoaderStyled } from "./Loader.styled";

export default function Loader() {
	return (
		<LoaderStyled role='alert'>
			<Hearts color="#00BFFF" height={80} width={100} />
			Завантажуємо...
		</LoaderStyled>
	)
}

