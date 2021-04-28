import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY' : '88ff1343-e274-43f3-b7de-1fee880b0a62'
	}
});

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 100) {
		return instance.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => {
				return response.data;
			});
	}
}

export const authAPI = {
	getAuth() {
		return instance.get(`/auth/me`)
			.then(response => {
				return response.data;
			});
	}
}

export const profileAPI = {
	getProfile(userID = 2){
		return instance.get(`profile/${userID}`)
			.then(response => {
				return response.data
			});
	}
}

export const followAPI ={
	setUnfollow(ID){
		return instance.delete(`follow/${ID}`)
	},
	setFollow(ID){
		return instance.post(`follow/${ID}`)
	}
}
