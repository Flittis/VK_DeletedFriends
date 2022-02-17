import VK from './src/VK.js'

let Config = {
    ACCESS_TOKEN: ' < your token > '
}

let vk = new VK(Config.ACCESS_TOKEN);

let CheckFriends = async () => {
    try {
        let { count, items } = (await vk.call('friends.get')).response;

        if (Config.cache && Config.cache.count > count) {
            let Deleted = Config.cache.items.filter(item => !items.includes(item));

            Deleted = (await vk.call('users.get', { user_ids: Deleted.join(', ') })).response;

            vk.call('messages.send', { 
                peer_id: vk.user_id, 
                message: `Пользователи удалены из друзей:\n` + Deleted.map(usr => `@id${usr.id} (${usr.first_name} ${usr.last_name})`).join('\n') 
            })
        }

        Config.cache = { count, items };
    } catch(e) {
        console.error(e);
    }
}

CheckFriends();
setInterval(CheckFriends, 30 * 60 * 1000);

