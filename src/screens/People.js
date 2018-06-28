import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from "axios";

class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: "",
            interestGroups: []
        }
    }

    async componentDidMount() {
        const baseUrl = "https://gentle-thicket-23408.herokuapp.com";
    
        const auth = {
            username: "jovit",
            password: "jovit"
        };

        const response = await axios.post(`${baseUrl}/auth`, {}, { auth });
        const token = response.data.data.token

        this.setState( { token } )

        let communitiesResponse = await axios.get(`${baseUrl}/v1/communities`, {
            data: {},
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        const interestGroups = communitiesResponse.data.data
        this.setState({ interestGroups})
    }

    render() {
        return(
            <div className="center-component-container">
            <h1 className="water-mark">Grupos de Interesse</h1>
                <Card.Group className="people-cards">
                {
                  this.state.interestGroups.map( (group, index) => (
                      <Card key={ index } className="people-card">
                        <Image src={ group.thumbnail } className="people-card__thumbnail"/>
                        <Card.Content className="people-card-content">
                          <Link to={ `/group/${group.path}` }>
                            <Card.Header content={ group.name } className="people-card-content__header" />
                          </Link>
                          <Card.Meta className="people-card-content__members">
                            <Icon name='user' />
                            { group.memberCount } { group.memberCount != 1 ? 'members' : 'member' }
                          </Card.Meta>
                          <Card.Description content={ group.description } className="people-card-content__description"/>
                        </Card.Content>
                      </Card>
                  ))
                }
                </Card.Group>
            </div>
        );
    }
}

export default People;
