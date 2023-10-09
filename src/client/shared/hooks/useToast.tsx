import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props  = {
    text: string;
    // toastPosition: string;
}

export const Toast = ({ text }: Props) => {
	toast(text, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});
};

export const ToastError = ({ text }: Props) => {
	toast.error(text, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	});
};