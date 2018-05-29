import React from 'react';
import { Link } from 'react-router-dom';

/*Mocked chats*/
const messages = [{
    sender: 'Rasmus Lerdorf',
    messagePreview: 'Neque porro quisquam est, qui dolorem ipsum quia...',
    unreadedMessages: 3
  },{
    sender: 'Mark Zuckerberg',
    messagePreview: 'Neque porro quisquam est, qui dolorem ipsum quia...',
    unreadedMessages: 2
  },{
    sender: 'Cláudia Bauzer',
    messagePreview: 'Neque porro quisquam est, qui dolorem ipsum quia...',
    unreadedMessages: 18
  },{
    sender: 'Eduardo Yuji',
    messagePreview: 'Neque porro quisquam est, qui dolorem ipsum quia...',
    unreadedMessages: 2
  },{
    sender: 'Zardél Santos',
    messagePreview: 'Porra... Maneiro hein... Si Señor???',
    unreadedMessages: 2
  },{
    sender: 'Douglas Santos',
    messagePreview: 'Porra... Maneiro hein... Si Señor???',
    unreadedMessages: 2
  }]


const Conversation = (props) => {
    return (
      <Link to="/">
        <div class="left-bar-container__chat__conversation">
          <div class="left-bar-container__chat__conversation__unreaded circleBase type1">
            <p class="left-bar-container__chat__conversation__unreaded__number">{props.unreadedMessages}</p>
          </div>
          <div class="left-bar-container__chat__conversation__info">
            <p class="left-bar-container__chat__conversation__info__sender">{props.sender}</p>
            <p class="left-bar-container__chat__conversation__info__preview">{props.messagePreview}</p>
          </div>
        </div>
      </Link>
    );
  }

class LeftBar extends React.Component {
  render() {
    return (
      <div class="left-bar-container">
        <div className="left-bar-container__profile">
          <img className="left-bar-container__profile__picture" src="img/man.svg" alt=""/>
          <p class="left-bar-container__profile__name">Fausto Silva<br/>Dev Front End</p>
          <Link to="/">
            <div class="left-bar-container__profile__button">
              <img className="left-bar-container__profile__button__picture" src="img/pencil.svg" alt=""/>
              <p class="left-bar-container__profile__button__text">Editar perfil</p>
            </div>
          </Link>
        </div>
        <h1 className="left-bar-container__chat-title">Chat</h1>
        <div className="left-bar-container__chat">
          {messages.map(message =>
            <Conversation sender={message.sender} messagePreview={message.messagePreview} unreadedMessages={message.unreadedMessages}/>
          )}
        </div>
      </div>
    );
  };
};

export default LeftBar;
