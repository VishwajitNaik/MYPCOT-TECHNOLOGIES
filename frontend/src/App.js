import './App.css';
import LoginForm from './components/LoginFrom';
import LoginRegistrationPage from './components/LoginRegistrationPage';
// import AddRecordForm from './components/AddRecordForm';
import RegistrationForm from './components/RegistrationForm';
// import Home from './containers/Home';



function App() {
  return (
    <div className="App">
    {/* <AddRecordForm /> */}
      {/* <Home /> */}

      <RegistrationForm />
      {/* <LoginForm /> */}
      <LoginRegistrationPage />



    </div>
  );
}

export default App;
