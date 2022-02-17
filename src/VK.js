import axios from 'axios'

export default class VK {
    access_token;
    user_id;
    v = 5.131;
    lang = 'ru';

    constructor(access_token) {
        this.access_token = access_token;

        this.call('users.get')
            .then( res => this.user_id = res.response[0].id )
            .catch( err => {
                this.access_token = null;
                console.error('Access token invalid')
            })
    }

    call(method, options = {}) {
        return new Promise((resolve, reject) => {
            if (!method) return reject('Bad request');
            if (!options?.access_token && !this.access_token) return reject('Access token not defined');

            if (method == 'messages.send' && !options.random_id) options.random_id = 0;
            if (!options?.access_token) options.access_token = this.access_token;
            if (!options.v) options.v = this.v;
            if (!options.lang) options.lang = this.lang;

            axios({
                method: 'GET',
                url: 'https://api.vk.com/method/' + method,
                params: options,
            }).then((resp) => {
                if (resp.data.error || !resp.data) return reject(resp?.data?.error?.error_msg || 'Unknown error');

                resolve(resp.data);
            }).catch((err) => reject(err.response ? (err?.response?.data?.error?.error_msg || 'Unknown error') : err));
        })
    }   
}