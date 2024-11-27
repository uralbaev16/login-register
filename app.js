const DATA = [
    {
        name: "John",
        username: "john32",
        password: "12345678"
    },
    {
        name: "Laylo",
        username: "laylo01",
        password: "87654321"
    },
    {
        name: "Biloliddin",
        username: "biloliddin08",
        password: "loop-loop"
    },
    {
        name: "Abduqahhir",
        username: "abduqahhor",
        password: "123456"
    },
]
function signIn(user) {
    try{
        let existUser = DATA.find(u => u.username === user.username)
        if (!existUser || existUser.password !== user.password) {
            throw new Error('Username or password is incorrect')
        }
        return `Welcome ${existUser.name}`
    }catch(error) {
        return (error);
    }finally{

    }
}

function login () {
    let username = prompt("Enter your username")
    let password = prompt("Enter your password")
    alert(signIn({username, password}))
}


function signUp(newUser){
    try {
        if (newUser.name.length < 1) {
            throw new Error("Name must be at least 1 letter");
        }
        if (newUser.username.length < 4) {
            throw new Error("Username must be at least 4 characters");
        }
        if (newUser.password.length < 6) {
            throw new Error("password must be at least 6 characters long");
        }

        DATA.push(newUser);
        return `Welcome ${newUser.name}, you have successfully signed up`;
    } catch (error) {
        return (error);
    }
}

function register(){
    let name = prompt("Enter full name");
    let username = prompt("Enter new username");
    let password = prompt("Enter new password");
    alert(signUp({ name, username, password }));
}