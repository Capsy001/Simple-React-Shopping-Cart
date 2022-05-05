import axios from "axios";

export async function login(email, password)
{
  const user = { email: email, password: password };

  await axios.get("http://localhost:3000/users/"+email).then(response =>
    {
    const data = response.data;

    try
    {
      if (data.result == "noUser")
      {
        alert("Invalid credentials!");
        window.location.href = "/";
        return;
      }
    } catch (error){
        alert("Authorized!");
    }

    sessionStorage.setItem('logged', 'true');
    sessionStorage.setItem('loggedName', data.name);
    sessionStorage.setItem('loggedEmail', data.email);
    sessionStorage.setItem('loggedRole', data.role);

    const name = sessionStorage.getItem('loggedName');
    console.log(name + " logged in!");
    
    window.location.href='/dashboard';
    });
}

export async function register(user)
{
  await axios.post("http://localhost:3000/users/", user).then(response =>
  {
    
    const data = response.data;

    if (data.result == "exist")
    {
      alert("This email already exist!");
      return;
    }

    if (data.result == "registered")
    {
      alert("Registered successfully!");
      window.location.href="/"

    }

    
    });


}