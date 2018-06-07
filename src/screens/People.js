import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

const People = () => {
    let interestGroups = [
         { 'name': 'React Developers', 'description': "If you know React and love it, feel free to join us.", 'thumbnail': 'https://cdn-images-1.medium.com/max/1468/1*kt9otqHk14BZIMNruiG0BA.png', 'member_count': 100 },
         { 'name': 'Python Lovers', 'description': ">>> print 'We are the {} who say \"{}!\"'.format('knights', 'Ni')", 'thumbnail': 'https://cdn-images-1.medium.com/max/1200/1*PPIp7twJJUknfohZqtL8pQ.png', 'member_count': 500 },
         { 'name': 'PHP 4 Life', 'description': "PHP is the new React", 'thumbnail': 'https://www.thefamousbirthdays.com/photo/commons/3/33/wk_58876_39354_large.jpg', 'member_count': 1 },
         { 'name': 'LISP <3', 'description': "((((love 'LISP))))", 'thumbnail': 'http://images.uncyc.org/pt/thumb/d/d7/Lisp-salvando-princesa.png/300px-Lisp-salvando-princesa.png', 'member_count': 10 },
         { 'name': 'I have a Ph.D.', 'description': "If you have a Ph.D. you can join", 'thumbnail': 'http://www.euprera.eu/wp-content/uploads/2017/04/PhD01-800x700.jpg', 'member_count': 2 },
         { 'name': 'Scrum Masters', 'description': "Share your experience of being a SM with us", 'thumbnail': 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/266404/settings_images/V5PBdEhHTKiPrs5cxqvu_skacbh5lTu6SXviNNR7N_Scrum_Master3.png', 'member_count': 15 }
    ]
    return(
        <div className="center-component-container">
          <h1 className="water-mark">Grupos de Interesse</h1>
            <Card.Group className="people-cards">
              {
                  interestGroups.map( (group, index) => (
                      <Card key={ index } className="people-card">
                        <Image src={ group.thumbnail } className="people-card__thumbnail"/>
                        <Card.Content className="people-card-content">
                          <Link to={ `/group/${index}` }>
                            <Card.Header content={ group.name } className="people-card-content__header" />
                          </Link>
                          <Card.Meta className="people-card-content__members">
                            <Icon name='user' />
                            { group.member_count } { group.member_count != 1 ? 'members' : 'member' }
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

export default People;
