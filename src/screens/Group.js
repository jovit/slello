import React from "react";
import { Link } from "react-router-dom";
import { Feed, Icon } from "semantic-ui-react";
import axios from "axios";

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      communityUrl: this.props.match.params.id,
      community: {},
      token: "",
      topics: []
    };
  }

  async componentDidMount() {
    const baseUrl = "https://gentle-thicket-23408.herokuapp.com";

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

    const topicsResponse = await axios.get(
      `${baseUrl}/v1/topics/?communityId=${community.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json"
        }
      }
    );
    const topics = topicsResponse.data.data;
    this.setState({ topics });
  }

  render() {
    return (
      <div className="center-component-container">
        <h1 className="water-mark">{this.state.community.name}</h1>
        <Feed className="feed-container">
          {(this.state.topics || [])
            .sort((a, b) => b.votes - a.votes)
            .map((discussion, index) => (
              <Feed.Event className="feed-event">
                <Feed.Content className="feed-event-content">
                  <Feed.Summary className="feed-event-content__summary">
                    {discussion.headline}
                    <Feed.Date>{discussion.postedAt}</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>{discussion.description}</Feed.Extra>
                  <Feed.Meta>
                    <Feed.User>{discussion.op.username}</Feed.User>
                    <Link to={`/group/${this.state.communityUrl}/${discussion.id}`}>
                      <Icon name="talk" />
                      {discussion.comments.length}{" "}
                      {discussion.comments.length !== 1
                        ? "comments"
                        : "comment"}
                    </Link>
                    <Feed.Like>
                      <Icon name="hand point up outline" />
                      {discussion.votes}{" "}
                      {discussion.votes !== 1 ? "votes" : "vote"}
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            ))}
        </Feed>
      </div>
    );
  }
}

export default Group;
