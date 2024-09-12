const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
	  username: 'Bob',
	  status: 'online',
	  lastActivity: 104
	}
];
	
const usersOnline = [];

users.forEach((names, index) => {
    if(users[index].status === 'online') {
        usersOnline.push([users[index].username]);
    }
})
alert(`Сейчас в онлайн следующие пользователи: ${usersOnline}`);
