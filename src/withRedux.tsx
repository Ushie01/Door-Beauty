import React from 'react';
import { Provider } from 'react-redux';
// import { AppProps } from 'next/app';
import store from './store';

const WithRedux = (WrappedComponent: any) => {
	const withReduxComponent = ({ ...props }) => (
		<Provider store={store}>
			<WrappedComponent {...props} />
		</Provider>
	);
	return withReduxComponent;
};

export default WithRedux;
