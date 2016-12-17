var userArray = [
	{
		username: "bob",
		password: "micheal"
	},
	{
		username: "alice",
		password: "walker"
	},
	{
		username: "john",
		password: "doe"
	},
	{ 
		username: "rick",
		password: "martin"
	}
]

function login() {
	var userName = document.getElementById('username').value
	var passWord = document.getElementById('password').value

	for (i = 0; i < userArray.length; i++) {
		if(userArray[i].username == userName && userArray[i].password == passWord) {
			alert("welcome " + userName)
			return
		}
	}alert("incorrect username or password")
}

function register () {
	var newUser = document.getElementById('newUsername').value
	var newPassword = document.getElementById('newPassword').value
	var combined = {
		username: newUser,
		password: newPassword
	}
	for (i = 0; i < userArray.length; i++) {
		if (newUser == userArray[i].username || newPassword == userArray[i].password) {
			alert('username already taken, please try again')
			return
		} else if ( newPassword.length < 8 ) {
			alert("password must be 8 characters")
			return
		}
	}
	userArray.push(combined)
	console.log(userArray)
}
