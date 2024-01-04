
import '../App.css';    
import { UserProvider, useUser } from './UserContext';

const LoggedInUser =()=>{
  const {user} = useUser();
  return (
    <p>
      Hello <span className='Username'>{user.name}</span>
    </p>
  )
}
const Header=()=>{
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser/>
    </header>
  )
}
const MainComp =()=>{
  const {user} = useUser();
  return (
    <div>
         <h2>What is Lorem ipsum</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Written by {user.name}</h3>
    </div>
   
  )
}  
function Structure() {  
  return (
    <div >
     
         <UserProvider>
            <Header/>
            <MainComp/>
      </UserProvider>
         
    </div>
   
  );
}

export default Structure;
