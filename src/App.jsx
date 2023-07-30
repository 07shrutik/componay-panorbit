import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userSlice } from "./store/slices";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
// import Chat from "./components/chat/Chat";
import "./App.css";
import Post from "./components/Post";
import Gallery from "./components/Gallery";
import Todo from "./components/Todo";

const App = () => {
  const dispatch = useDispatch();

  //user ASYNC AWAIT to handle promise as it is a better way to handle async operation or promise
  async function getusers() {
    const response = await fetch("https://panorbit.in/api/users.json");
    const users = await response.json();
    dispatch(userSlice.actions.Users(users.users));
  }

  //fetching api and we get the array of user
  useEffect(() => {
    getusers();
  }, []);

  return (
    //ROuting which help us to navigate to particular path and we have alloted pages to given paths
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
