import React,{useState} from 'react';
import Button from "@material-ui/core/Button";

function FormExample(){
    const [userData, setUserData] = useState({
        name: "",
        email: "",
      });

    const handleSubmit = (e) => {
        let newUserData = { ...userData };
        newUserData[e.target.id] = e.target.value;
        setUserData(newUserData)
        console.log(newUserData);
      };

const handleSubmitPost = (e) => {
    e.preventDefault();
    fetch('https://postman-echo.com/post',{
    // temporary
    mode: "no-cors", 
    method: 'POST',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(userData)
}).then(() => console.log(userData));

}
 
    return <form method='POST' onSubmit={handleSubmitPost}>
        <input type="text"  id="name" value={userData.name} onChange={(e => handleSubmit(e))} placeholder="type your name" name="user_name"/>
        <input type="text"  id="email" value={userData.email} onChange={(e => handleSubmit(e))} placeholder="type your email" name="user_mail"/>
        <Button  type="submit" variant="outlined" color="default" >
        Submit
      </Button>
    </form>
}

export default FormExample;