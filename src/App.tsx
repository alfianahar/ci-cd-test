import LoginForm from "./pages/LoginForm";
import "./App.css";
import { useEffect } from "react";

function App() {
  const fetchData = async (endpoint: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endpoint}`
    );

    return response.json();
  };

  const pararel = async () => {
    const usersData = fetchData("users");
    const postsData = fetchData("posts");

    const [users, posts] = await Promise.all([usersData, postsData]);

    console.log(users);
    console.log(posts);
  };

  useEffect(() => {
    pararel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200">
        <h1 className="font-sans text-lg font-bold">Minimalist Login Form</h1>
        <LoginForm />

        <footer className="mt-5">
          {" "}
          Made with <span>&nbsp;❤️&nbsp;</span> by{" "}
          <a
            href="https://www.alfianahar.com/bio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            &nbsp;Alfian Nahar
          </a>
        </footer>
      </div>
    </>
  );
}
export default App;
