import LoginForm from "./pages/LoginForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="font-sans text-lg font-bold">Simple Login Form</h1>
        <LoginForm />
      </div>
    </>
  );
}

export default App;
