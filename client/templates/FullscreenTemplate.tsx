import Head from 'next/head';
import Modal from '../components/Modal';
const FullscreenTemplate = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Messenger'}</title>
				<meta name='description' content='Платформа для общения в режиме реального времени' />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content='мессенджер, общение' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>

			<div className='app'>
				<Modal />
				<div className='container-fluid h-100 p-0'>
					<div className='row h-100 app__row'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default FullscreenTemplate;
