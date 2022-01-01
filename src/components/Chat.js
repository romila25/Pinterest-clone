import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from "./ChatMessage";
import { collection, doc, getDocs } from 'firebase/firestore';
import db from "../firebase";
import { useParams } from 'react-router-dom';

export default function Chat() {

    const { channelId } = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState();

    const getMessages = async () => {
        const messagesRef = collection(db, "rooms", channelId, "messages");
        const messages = await getDocs(messagesRef);
        setMessages(messages.docs.map((message) => { return { "id": message.id, "data": message.data() } }))
    }
    const getChannel = async () => {
        const channelsRef = collection(db, "rooms");
        const channels = await getDocs(channelsRef);
        const channel = channels.docs.find((doc) => doc.id === channelId);
        setChannel(channel.data());
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId]);

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel?.name}
                    </ChannelName>
                    <ChannelInfo>
                        Company wide announcements and work based matters

                    </ChannelInfo>

                </Channel>
                <ChannelDetails>
                    <div> Details</div>
                    <Info />

                </ChannelDetails>
            </Header>
            <MessageContainer>
                {messages?.map((message) => <ChatMessage message={message} key={message.id} />)}
            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const Header = styled.div`
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid rgba(83,39,83,.13);
`;

const MessageContainer = styled.div`
`;


const Channel = styled.div`
`;

const Info = styled(InfoOutlinedIcon)`
margin-left: 10px
`;

const ChannelDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: #606060;
`;

const ChannelName = styled.div`
font-weight: 700;
`;

const ChannelInfo = styled.div`
font-weight: 400;
color: #606060;
font-size: 13px;
margin-top: 8px;
`;

