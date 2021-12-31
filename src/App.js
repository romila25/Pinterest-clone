import './App.css';
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main>
          <Sidebar />
          <Routes>
            <Route path="/room" element={<Chat />} />
            <Route path="/" element={<Login />}> </Route>
          </Routes>
        </Main>
      </Container>


    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px auto;
`

const Main = styled.div`
display: grid;
grid-template-columns: 260px auto;
`

export default App;
