import React, { Component } from 'react';
import { Grid, Container, Input } from 'semantic-ui-react';
import Card from './Card';


export default class PagePeople extends Component {
  jobList = [
    { 'job': 'React Developers', 'text': "If you know React and love it, feel free to join us.", 'thumbnail': 'https://cdn-images-1.medium.com/max/1468/1*kt9otqHk14BZIMNruiG0BA.png', 'member_count': 100 },
    { 'job': 'Python Lovers', 'text': ">>> print 'We are the {} who say \"{}!\"'.format('knights', 'Ni')", 'thumbnail': 'https://cdn-images-1.medium.com/max/1200/1*PPIp7twJJUknfohZqtL8pQ.png', 'member_count': 500 },
    { 'job': 'PHP 4 Life', 'text': "PHP is the new React", 'thumbnail': 'https://www.thefamousbirthdays.com/photo/commons/3/33/wk_58876_39354_large.jpg', 'member_count': 1 },
    { 'job': 'LISP <3', 'text': "((((love 'LISP))))", 'thumbnail': 'http://images.uncyc.org/pt/thumb/d/d7/Lisp-salvando-princesa.png/300px-Lisp-salvando-princesa.png', 'member_count': 10 },
    { 'job': 'I have a Ph.D.', 'text': "If you have a Ph.D. you can join", 'thumbnail': 'http://www.euprera.eu/wp-content/uploads/2017/04/PhD01-800x700.jpg', 'member_count': 2 },
    { 'job': 'Scrum Masters', 'text': "Share your experience of being a SM with us", 'thumbnail': 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/266404/settings_images/V5PBdEhHTKiPrs5cxqvu_skacbh5lTu6SXviNNR7N_Scrum_Master3.png', 'member_count': 15 }
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
              {this.showJobList.map((element, index) => (
                <Grid.Column style={{ margin: '24px 0px', height: '320px' }}>
                    <Card
                      job={element.job}
                      text={element.text}
                      onClick={() => this.props.history.push(`/group/${index}`)}
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
