import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.banchango.shop:8080/v2/'
});

export const userApi = {
    signIn: (body) => api.post("users/sign-in", body)
        .catch(error => {
            const {response: {status}} = error;
            if(status === 404) {
                alert("이메일 또는 비밀번호가 일치하지 않습니다.");
            }
        })
};