import { request } from '../utils/request';
import { ACTION_TYPE } from './action-type';

export const logout = () => {
	request('/api/auth/logout', 'POST');

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
