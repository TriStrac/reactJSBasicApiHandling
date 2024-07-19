import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Assets/LoginSignup/Login';
import { SignUp } from './Components/Assets/LoginSignup/SignUp';
import { DisplayAccounts } from './Components/Assets/LoginSignup/DisplayAccounts';

function App() {
  return (
    <div>
      <Login/>
      <SignUp/>
      <DisplayAccounts/>
    </div>
  );
}

export default App;
