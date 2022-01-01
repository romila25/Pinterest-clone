import React from 'react';
import styled from 'styled-components';

export default function ChatMessage({ message }) {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/32.jpg" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {message.data.user}
                    <span>{new Date(message.data.timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {message.data.message}
                </Text>

            </MessageContent>
        </Container>
    )
}

const Container = styled.div`
padding: 8px 20px;
display: flex;
align-items: center;
transition: background 1s, ease-in-out 1s;
:hover {
    background: #DCDCDC;
}

`;

const UserAvatar = styled.div`
width: 36px;
height: 36px;
border-radius: 2px;
overflow: hidden;
margin-right: 8px;
img {
    width: 100%;
}

`;

const MessageContent = styled.div`
display: flex;
flex-direction: column;
`;


const Name = styled.span`
font-weight: 700;
font-size: 15px;
line-height: 1.4;
span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,96,97);
    font-size: 13px;
}
`;


const Text = styled.span`
`;
