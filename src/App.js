import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {

  const [rooms, setRooms] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = async () => {
    const roomsRef = collection(db, "rooms");
    const data = await getDocs(roomsRef);
    setRooms(data.docs.map(doc => { return { "id": doc.id, "name": doc.data().name } }));
  }

  const addRoom = (newRoom) => setRooms([...rooms, newRoom]);

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  }

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {
          !user ? <Login setUser={setUser} /> :
            <Container>
              <Header user={user} signOut={signOut} />
              <Main>
                <Sidebar rooms={rooms} addRoom={addRoom} />
                <Routes>
                  <Route path="/room/:channelId" element={<Chat user={user} />} />
                  <Route path="/" element={<div>Select or Create a channel</div>} />
                </Routes>
              </Main>
            </Container>
        }
      </BrowserRouter>
    </div >
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px minmax(0, 1fr);
`

const Main = styled.div`
display: grid;
grid-template-columns: 260px auto;
`

export default App;
