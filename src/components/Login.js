import React from 'react';
import styled from 'styled-components';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";


export default function Login(props) {

    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL
            }
            localStorage.setItem("user", JSON.stringify(newUser));
            props.setUser(newUser);
            console.log(newUser);
        }).catch((error) => {
            alert(error.message);
        });
    }
    return (
        <Container>
            <Content>
                <SlackImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fslack-logo-thumb.png&f=1&nofb=1" />
                <h1> Sign in to Slack</h1>
                <SignInButton onClick={signIn}>
                    Sign in with Google
                </SignInButton>
            </Content>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
background: #f8f8f8;
display: flex;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
background-color: white;
padding: 100px;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;

const SlackImg = styled.img`
height: 100px;
`;

const SignInButton = styled.button`
margin-top: 50px;
background: #0a8d48;
color: white;
border: none;
height: 40px;
border-radius: 4px;
cursor: pointer;
font-size: 15px;
`;
