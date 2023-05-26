import LoginForm from "./pages/LoginForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="font-sans text-lg font-bold">Minimalist Login Form</h1>
        <LoginForm />
        <footer>Made by Alfian Nahar</footer>
      </div>
    </>
  );
}
export default App;
