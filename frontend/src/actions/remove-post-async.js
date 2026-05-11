import { request } from "../utils/request";

export const removePostAsync = (id) => () => {
	return request(`/api/posts/${id}`, 'DELETE');
}


