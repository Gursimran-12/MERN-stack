const database = {
    username: "Simran",
    password: 1234567
}

function login(username, password)
{
    return new Promise((resolve, reject) => 
    setTimeout(() => {
        if(username === database.username && password === database.password)
        {
            resolve("you are logged in");
        }
        else
        {
            reject("Invalid Credentials");
        }
    }, 1500) 
    )
}

const getDataFromUser = async() => {
    const username = prompt('Enter your name here');
    const password = parseInt(prompt('Enter your password here'));

    try {
        const res = await login(username, password)
        if(res)
        {
            window.navigation.navigate('https://www.wikipedia.org/')
        }
    }
    catch(err)
    {
        console.log(err);
    }
    finally
    {
        console.log('This block will always execute');
    }
}
getDataFromUser();
