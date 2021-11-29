import React from "react";
//import Topbar from "../../Components/topbar/Topbar";
import "./messenger.css"
import Conversation from "../../Components/conversation/Conversation";
import Message from "../../Components/message/Message";
//import ChatOnline from "../../components/chatOnline/ChatOnline";
export default function Messenger(){
    return (
    
        <div className="messenger">
        <div className="chatMenu">Menu
            <div className="chatMenuWrapper">
                <input placeholder="Search For Friends" className="chatMenuInput"></input>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">Chat
        <div className= "chatBoxWrapper"></div>
        <div className="chatBoxTop"></div>
        <Message/>
        </div>
        <div className="chatOnline">Online
            <div className="chatOnlineWrapper"></div>
        </div>
        </div>
    )
}