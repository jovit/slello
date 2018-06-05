import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'

class Home extends React.Component {
  render() {
    return (
      <div className="center-component-container">
        <div>
          <h1 className="water-mark">Projetos</h1>
          <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header>Matthew Harris</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
                  <Card.Description>aaaaaaaaaaaaaaa.</Card.Description>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content>
                  <Card.Header content='Jake Smith' />
                  <Card.Meta content='Musicians' />
                  <Card.Description content='Jake is a drummer living in New York.' />
                </Card.Content>
              </Card>

              <Card>
                <Card.Content
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card
                header='Jenny Hess'
                meta='Friend'
                description='Jenny is a student studying Media Management at the New School'
              />
            </Card.Group> 
          </div>
      </div>
    );
  };
};

export default Home;
