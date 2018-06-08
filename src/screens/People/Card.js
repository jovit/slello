import React, { Component } from 'react';
import { Grid, Container, Icon } from 'semantic-ui-react';


export default class Card extends Component {
  componentDidMount() {
    this.ellipsizeTextBox('textDescription');
  }

  componentDidUpdate() {
    this.ellipsizeTextBox('textDescription');
  }

  ellipsizeTextBox = (className) => {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] != null) {
        const el = elements[i];
        const wordArray = el.innerHTML.split(' ');
        while (el.scrollHeight > el.offsetHeight) {
          wordArray.pop();
          el.innerHTML = wordArray.join(' ') + '...';
        }
      }
    }
  }

  render() {
    const {
      job,
      text
    } = this.props;

    return (
      <div style={{
        width: '220px',
        height: '100%',
        backgroundColor: '#FAFAFA',
        margin: '0 auto'
      }}
      onClick={this.props.onClick}
      >
        <div style={{
          backgroundColor: '#8492A6',
          height: '140px',
          width: '220px',
          verticalAlign: 'middle',
          display: 'table-cell',
          textAlign: 'center'
        }}
        >
          <Icon
            name="user circle"
            size="massive"
            centered
          />
        </div>
        <h2 style={{ fontSize: '20px', padding: '0px 16px' }}>{job}</h2>
        <p className="textDescription" style={{ height: '7.0em', padding: '0px 16px', fontSize:'12px' }}>{text}</p>
      </div>
    );
  }
}
