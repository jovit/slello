import React from "react";
import { Link } from "react-router-dom";
import { Feed, Icon } from "semantic-ui-react";
import axios from "axios";

const baseUrl = "https://gentle-thicket-23408.herokuapp.com";

class TopicCommments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      communityUrl: this.props.match.params.id,
      discussionId: this.props.match.params.discussionId,
      community: {},
      token: "",
      topic: {},
      messageInput: ""
    };
  }

  async componentDidMount() {
    const auth = {
      username: "jovit",
      password: "jovit"
    };

    const response = await axios.post(`${baseUrl}/auth`, {}, { auth });
    const token = response.data.data.token;

    this.setState({ token });

    const communitiesResponse = await axios.get(
      `${baseUrl}/v1/communities/?path=${this.state.communityUrl}`,
      {
        data: {},
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    const community = communitiesResponse.data.data;
    this.setState({ community });

    const topicResponse = await axios.get(
      `${baseUrl}/v1/topics/${this.state.discussionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json"
        }
      }
    );
    const topic = topicResponse.data.data;
    this.setState({ topic });
  }

  async createComment() {
    const message = this.state.messageInput;

    this.setState({ messageInput: "" });

    const messagesResponse = await axios.post(
      `${baseUrl}/v1/topics/${this.state.discussionId}:comment`,
      { body: message },
      {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      }
    );

    const topicResponse = await axios.get(
      `${baseUrl}/v1/topics/${this.state.discussionId}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          "Content-type": "application/json"
        }
      }
    );
    const topic = topicResponse.data.data;
    this.setState({ topic });
  }

  render() {
    return (
      <div className="center-component-container">
        <h1 className="water-mark">{this.state.community.name}</h1>
        <Feed className="feed-container">
          <Feed.Event className="feed-event">
            <Feed.Content className="feed-event-content">
              <Feed.Summary className="feed-event-content__summary">
                {this.state.topic.headline}
                <Feed.Date>{this.state.topic.postedAt}</Feed.Date>
              </Feed.Summary>
              <Feed.Extra>{this.state.topic.description}</Feed.Extra>
            </Feed.Content>
          </Feed.Event>
          {this.state.topic.comments &&
            this.state.topic.comments.map(comment => (
              <Feed.Event className="feed-event" key={comment.id}>
                <Feed.Content className="feed-event-content">
                  <Feed.Summary className="feed-event-content__summary">
                    {comment.user}
                    <Feed.Date>{comment.postedAt}</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra>{comment.body}</Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            ))}
          <input
            value={this.state.messageInput}
            onChange={e => this.setState({ messageInput: e.target.value })}
            style={{ width: "100%", fontSize: "16px", borderWidth: 0 }}
            type="text"
            placeholder="Comentar"
            onKeyPress={e => (e.key === "Enter" ? this.createComment() : null)}
          />
        </Feed>
      </div>
    );
  }
}

export default TopicCommments;
