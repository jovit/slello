import React from 'react';
import { Link } from 'react-router-dom';
import { Feed, Icon } from 'semantic-ui-react';

const Group = ({ match }) => {
    let interestGroups = [
        { 'name': 'React Developers', 'description': "If you know React and love it, feel free to join us.", 'thumbnail': 'https://cdn-images-1.medium.com/max/1468/1*kt9otqHk14BZIMNruiG0BA.png', 'member_count': 100, 'discussions': [
            { 'topic': 'Benchmarking React vs Vue.js vs Angular 4', 'brief': "I just benchmarked the 3 major front-end frameworks/libraries just so you wouldn't need to do it yourself...", 'op': 'rasmus.lerdorf',  'comment_count': 50, 'votes': 100, 'posted_at': '2017-10-05 00:05AM' },
            { 'topic': 'Why do you like React?', 'brief': "Just wondering, why do you like/use React?", 'op': 'cmbm', 'comment_count': 1, 'votes': 1, 'posted_at': 'Now' },
            { 'topic': '[BUG] PLZ HELP!!', 'brief': "I haev this real big porject in prodctuion with react, but it juzt wont start :( plz help...", 'op': 'throwaway-boi', 'comment_count': 15, 'votes': -500, 'posted_at': '3 days ago' },
            { 'topic': 'Going native', 'brief': "So I was wondering if I should start learning React Native or not? Like what are the pros and cons? Is it reliable?...", 'op': 'markz', 'comment_count': 0, 'votes': 0, 'posted_at': '2 hours ago' }
        ] },
        { 'name': 'Python Lovers', 'description': ">>> print 'We are the {} who say \"{}!\"'.format('knights', 'Ni')", 'thumbnail': 'https://cdn-images-1.medium.com/max/1200/1*PPIp7twJJUknfohZqtL8pQ.png', 'member_count': 500, 'discussions': [
            { 'topic': 'STOP WITH THE MONTY PYTHON REFERENCES', 'brief': "", 'op': 'qwkakm123', 'comment_count': 100, 'votes': -30, 'posted_at': '2010-05-05 03:12PM' },
            { 'topic': 'Best PL ever', 'brief': ">>> import __hello__", 'op': 'guido', 'comment_count': 1, 'votes': 5, 'posted_at': '2 minutes ago' },
            { 'topic': 'What do you use Python for?', 'brief': "I mainly use python for ML...", 'op': 'kzn-AI', 'comment_count': 1500, 'votes': 1234, 'posted_at': '1 day ago' }
        ] },
        { 'name': 'PHP 4 Life', 'description': "PHP is the new React", 'thumbnail': 'https://media0.giphy.com/media/gc5gpDEWN15aU/giphy.gif', 'member_count': 1, 'discussions': [
            { 'topic': "What do you think about PHP and why is it the best PL ever?", 'brief': '<3 <3 <3 <3', 'op': 'rasmus.lerdorf', 'comment_count': 9999, 'votes': 9999, 'posted_at': '1 day ago' }
        ] },
        { 'name': 'LISP <3', 'description': "((((love 'LISP))))", 'thumbnail': 'http://images.uncyc.org/pt/thumb/d/d7/Lisp-salvando-princesa.png/300px-Lisp-salvando-princesa.png', 'member_count': 10, 'discussions': [
            { 'topic': '()()()()(((()))(()))()()())(((())))', 'brief': "Why are there so many parenthesis in this PL? Like dude, WTF?", 'op': 'rasmus.lerdorf', 'comment_count': 10, 'votes': -5000, 'posted_at': 'Now' },
            { 'topic': 'Scheme, Clojure, Common Lisp... Which should I use?', 'brief': "", 'op': 'null', 'comment_count': 3, 'votes': 12, 'posted_at': '4 minutes ago' }
        ] }
    ]

    let group = interestGroups[match.params.id] || {'name': "There's nothing to see here"}

    return(
        <div className="center-component-container">
          <h1 className="water-mark">{ group.name }</h1>
          <Feed className="feed-container">
          {
              (group.discussions || []).sort((a, b) => b.votes - a.votes).map( (discussion, index) => (
                <Feed.Event className="feed-event">
                  <Feed.Content className="feed-event-content">
                    <Feed.Summary className="feed-event-content__summary">
                      { discussion.topic }
                      <Feed.Date>{ discussion.posted_at }</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                        { discussion.brief }
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.User>{ discussion.op }</Feed.User>
                      <Link to="#">
                        <Icon name="talk" />
                        { discussion.comment_count } { discussion.comment_count !== 1 ? 'comments' : 'comment' }
                      </Link>
                      <Feed.Like>
                        <Icon name="hand point up outline" />
                        { discussion.votes } { discussion.votes !== 1 ? 'votes' : 'vote' }
                      </Feed.Like>
                    </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            ))
        }
        </Feed>
        </div>
    );
}

export default Group;

