import React, { Component } from 'react';
import { Grid, Container, Input } from 'semantic-ui-react';
import Card from './Card';


export default class PagePeople extends Component {
  jobList = [
    {
      job: 'Designer',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Designer',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Designer',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    },
    {
      job: 'Programador',
      text: 'O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor O programador trabalha com o desenvolvimento de aplicativos mobile e programação do servidor'
    }
  ]

  showJobList = this.jobList;

  filterJobs = (searchString) => {
    this.showJobList = [];
    for (const element in this.jobList) {
      if (this.jobList[element].job.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
        this.showJobList.push(this.jobList[element]);
        console.log(this.showJobList);
      }
    }
    if (searchString == '') {
      this.showJobList = this.jobList;
    }
    this.setState({});
  }

  render() {
    return (
      <div className='center-component-container'>
      <div style={{width:'762px'}} >
        <Container style={{ padding: '16px' }}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <p style={{ fontSize: '24px' }}>People</p>
              </Grid.Column>
              <Grid.Column>
                <Input
                  icon="search"
                  iconPosition="left"
                  placeholder="Search topics"
                  size='massive'
                  style={{ position: 'absolute', right: '16px' }}
                  onChange={(event, data) => { this.filterJobs(data.value); }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid stackable>
            <Grid.Row columns={3}>
              {this.showJobList.map(element => (
                <Grid.Column style={{ margin: '24px 0px', height: '320px' }}>
                  <Card
                    job={element.job}
                    text={element.text}
                  />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </div>
    );
  }
}
