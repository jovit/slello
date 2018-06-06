import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Card, Step, Header, Table, Rating } from 'semantic-ui-react'

const square = { width: 150, height: 150, padding: 50}
const segtext = { fontSize: 17}

class ProjectInfo_4 extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div className="center-component-container">
          <div style={{marginLeft: 30, align: 'top'}}>
            <h1 style={{textAlign: 'left'}} className="water-mark">Projeto Matthew Harris</h1>
            <p className="water-mark" style={{textAlign: 'left',fontSize: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc quis augue tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            </p>
          </div>

          <Menu icon='labeled' style={{marginTop: 30}}>
            <Menu.Item style={square} name='gamepad' onClick={this.handleItemClick}>
              <Icon name='chart line' />
              <p style={{fontSize: 22}}>Gráficos</p>
            </Menu.Item>

            <Menu.Item style={square} name='video camera' onClick={this.handleItemClick}>
              <Icon name='users' />
              <p style={{fontSize: 22}}>Equipe</p>
            </Menu.Item>

            <Menu.Item style={square} name='video play' onClick={this.handleItemClick}>
              <Icon name='history' />
              <p style={{fontSize: 22}}>Histórico</p>
            </Menu.Item>
          </Menu>

          <img width="90%" src="img/timeline4.png" alt=""/>

          <Step.Group size='massive'>
            <Step active>
              <Icon name='' />
              <Step.Content>
                <Step.Title>Sprint 1</Step.Title>
              </Step.Content>
            </Step>

            <Step >
              <Icon name='' />
              <Step.Content>
                <Step.Title>Sprint 2</Step.Title>
              </Step.Content>
            </Step>

            <Step >
              <Icon name='' />
              <Step.Content>
                <Step.Title>Sprint 3</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>

          <Table style={{fontSize: 16}} celled padded collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Status</Table.HeaderCell>
                <Table.HeaderCell>Tarefa</Table.HeaderCell>
                <Table.HeaderCell>Responsável</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Icon style={{marginLeft: 15}} size='large' color='green' name='check circle' />
                </Table.Cell>
                <Table.Cell singleLine>Final Tests</Table.Cell>
                <Table.Cell>
                  Bernardo Guilherme
                </Table.Cell>
                <Table.Cell textAlign='right'>
                  <a href='#'>Mais detalhes</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon style={{marginLeft: 15}} size='large' color='green' name='check circle' />
                </Table.Cell>
                <Table.Cell singleLine>Email Notification</Table.Cell>
                <Table.Cell>
                  Luiz Tabchoury
                </Table.Cell>
                <Table.Cell textAlign='right'>
                  <a href='#'>Mais detalhes</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon style={{marginLeft: 15}} size='large' color='green' name='check circle' />
                </Table.Cell>
                <Table.Cell singleLine>Checkout</Table.Cell>
                <Table.Cell>
                  Diego Narita
                </Table.Cell>
                <Table.Cell textAlign='right'>
                  <a href='#'>Mais detalhes</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon style={{marginLeft: 15}} size='large' color='green' name='check circle' />
                </Table.Cell>
                <Table.Cell singleLine>Order Details</Table.Cell>
                <Table.Cell>
                  Lucy Meirelles
                </Table.Cell>
                <Table.Cell textAlign='right'>
                  <a href='#'>Mais detalhes</a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
      </div>
    );
  };
};

export default ProjectInfo_4;
