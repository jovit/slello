import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      expanded: false,
      messages: [],
      messageInput: ""
    };
  }

  async componentDidMount() {
    const headers = {
      Authorization: "Basic am92aXQ6am92aXQ="
    };
    const response = await axios.post(
      "https://gentle-thicket-23408.herokuapp.com/auth",
      null,
      {
        headers
      }
    );

    const token = response.data.data.token;

    this.setState({ token: token });

    const messagesResponse = await axios.get(
      "https://gentle-thicket-23408.herokuapp.com/latest/messages?channel=" +
        this.props.name,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    this.setState({ messages: messagesResponse.data });
  }

  async sendMessage() {
    const message = this.state.messageInput

    this.setState({ messageInput: "" });

    const messagesResponse = await axios.post(
      "https://gentle-thicket-23408.herokuapp.com/latest/messages",
      {
        destination: this.props.name,
        message,
        type: "CHAT_MESSAGE"
      },
      {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      }
    );

    const messageResponse = await axios.get(
      "https://gentle-thicket-23408.herokuapp.com/latest/messages?channel=" +
        this.props.name,
      {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      }
    );

    this.setState({ messages: messageResponse.data });

  }

  render() {
    return (
      <Link to="/">
        <div className="left-bar-container__chat__conversation">
          <div className="left-bar-container__chat__conversation__unreaded circleBase type1">
            <p className="left-bar-container__chat__conversation__unreaded__number">
              {this.props.unreadedMessages}
            </p>
          </div>
          <div
            className="left-bar-container__chat__conversation__info"
            onClick={() => this.setState({ expanded: !this.state.expanded })}
          >
            <p className="left-bar-container__chat__conversation__info__sender">
              {this.props.name}
            </p>
          </div>
        </div>
        <div style={{ fontSize: "16px" }}>
          {this.state.expanded
            ? this.state.messages.map(message => (
                <p
                  key={message.id.timestamp}
                  className="left-bar-container__chat__conversation__info__preview"
                  style={{ fontSize: "16px" }}
                >
                  <strong>{message.user}:</strong> {message.message}
                </p>
              ))
            : null}
          {this.state.expanded && (
            <input
              value={this.state.messageInput}
              onChange={e => this.setState({ messageInput: e.target.value })}
              style={{ width: "100%" }}
              type="text"
              placeholder="Enviar mensagem"
              onKeyPress={e => (e.key === "Enter" ? this.sendMessage() : null)}
            />
          )}
        </div>
      </Link>
    );
  }
}

class LeftBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      channels: []
    };
  }

  async componentDidMount() {
    const headers = {
      Authorization: "Basic am92aXQ6am92aXQ="
    };
    const response = await axios.post(
      "https://gentle-thicket-23408.herokuapp.com/auth",
      null,
      {
        headers
      }
    );

    const token = response.data.data.token;

    this.setState({ token: token });

    const channelsResponse = await axios.get(
      "https://gentle-thicket-23408.herokuapp.com/latest/channels",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    this.setState({ channels: channelsResponse.data.data });
  }

  render() {
    return (
      <div class="left-bar-container">
        <div className="left-bar-container__profile">
          <img
            className="left-bar-container__profile__picture"
            src="img/man.svg"
            alt=""
          />
          <p class="left-bar-container__profile__name">
            Fausto Silva<br />Dev Front End
          </p>
          <Link to="/">
            <div class="left-bar-container__profile__button">
              <img
                className="left-bar-container__profile__button__picture"
                src="img/pencil.svg"
                alt=""
              />
              <p class="left-bar-container__profile__button__text">
                Editar perfil
              </p>
            </div>
          </Link>
        </div>
        <h1 className="left-bar-container__chat-title">Chat</h1>
        <div className="left-bar-container__chat">
          {this.state.channels.map(channel => (
            <Conversation
              key={channel.name}
              name={channel.name}
              unreadedMessages={channel.members.length}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default LeftBar;
