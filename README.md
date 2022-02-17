# VK_DeletedFriends
 
## Описание

Благодаря этому боту, вы сможете получать уведомления, как только кто-то удаляет вас из друзей ВК.

## Установка

**Для запуска бота, нужен только _[NodeJS](https://nodejs.org)_**

- **Устанавливаем _NodeJS_ (Debian/Ubuntu):**
```
~# curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
~# sudo apt install -y nodejs
```
Инструкцию по установке для других систем, вы можете найти на _[официальном сайте](https://nodejs.org)_.

- **После установки клонируем репозиторий:**
```
~# git clone https://github.com/Flittis/VK_DeletedFriends.git
~# cd VK_DeletedFriends
```
- **Устанавливаем библиотеки:**
```
~# npm install
```

## Получаем токен

- **Перейдите по ссылке для получения токена с правами на сообщения:**
https://vkhost.github.io
*Для правильной работы бота в фантом-чатах рекомендуется получить токен от **VK Admin***
*Токеном является часть после **access_token=**  до  **&expires_in***

- **Скопируйте ваш токен из адресной строки (никому его не показывайте)**
![alt text](https://github.com/Flittis/Lua_VK_ModuleBot/raw/master/tokenScreen.jpg)

- **Откройте файл index.js любым текстовым редактором, и замените 4-ю строку:**
```
ACCESS_TOKEN: ' < your token > '
```
- **Вместо *< your token >* укажите свой токен, который вы получили ранее.**
```
ACCESS_TOKEN: '8608c9a3***acd422'
```

## Запуск бота
 - **Запустите скрипт**
```
~# node index.js
```
 - **Для удобного управления и отслеживания работы скрипта можно использовать менеджер процессов PM2**
```
~# npm install pm2 -g
```
 - **Добавляем скрипт в PM2**
```
~# pm2 start index.js --name=DeletedFriends
```
Подробно ознакомиться с функционалом пакетного менеджера, узнать как настроить автозапуск, смотреть логи и т.д. вы можете в _[официальной документации](https://vk.cc/awUBaH)_.

