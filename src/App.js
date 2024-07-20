import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Assets/LoginSignup/Login';
import { SignUp } from './Components/Assets/LoginSignup/SignUp';
import { DisplayAccounts } from './Components/Assets/LoginSignup/DisplayAccounts';
import { DeleteAccount } from './Components/Assets/LoginSignup/DeleteAccount';
import { CreateInventory } from './Components/Assets/Inventory/CreateInventory';
import { DisplayInventory } from './Components/Assets/Inventory/DisplayInventory';
import { DeleteInventory } from './Components/Assets/Inventory/DeleteInventory';
import { CreateSubscription } from './Components/Assets/Subscription/CreateSubscription';
import { DisplaySubscription } from './Components/Assets/Subscription/DisplaySubscription';
import { DeleteSubscription } from './Components/Assets/Subscription/DeleteSubscription';

function App() {
  return (
    <div>
      <Login/>
      <SignUp/>
      <DisplayAccounts/>
      <DeleteAccount/>
      <CreateInventory/>
      <DisplayInventory/>
      <DeleteInventory/>
      <CreateSubscription/>
      <DisplaySubscription/>
      <DeleteSubscription/>
    </div>
  );
}

export default App;
