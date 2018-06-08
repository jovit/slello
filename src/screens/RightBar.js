import React from 'react';
import { Link } from 'react-router-dom';


/*Mocked widgets*/
const widgets = [{
    key: 'projects',
    unselectedImage: 'img/unselected_projects.svg',
    selectedImage: 'img/selected_projects.svg',
    url: '/'
  },{
    key: 'charts',
    unselectedImage: 'img/unselected_charts.svg',
    selectedImage: 'img/selected_charts.svg',
    url: '/charts'
  },{
    key: 'people',
    unselectedImage: 'img/unselected_people.svg',
    selectedImage: 'img/selected_people.svg',
    url: '/people'
  },{
    key: 'add-widget',
    unselectedImage: 'img/unselected_add_widget.svg',
    selectedImage: 'img/selected_add_widget.svg',
    url: '/add-widget'
  }]


class WidgetButton extends React.Component{

  handleClick = () => {
    this.props.changeSelectedWidget(this.props.name);
    // console.log(this.props.name);
  }

 render() {
   return (
     <Link to={this.props.url}>
       <div className="right-bar-container__widget-button" onClick={this.handleClick}>
         <img className="right-bar-container__widget-button__picture" src={this.props.image} alt=""/>
       </div>
     </Link>
   );
 }

};


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  render() {
    return (
      <div>
        Seconds: {this.a.seconds}
      </div>
    );
  }
}


class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedWidget: 'projects' };
    this.changeSelectedWidget = this.changeSelectedWidget.bind(this);
  }

  changeSelectedWidget(widget_name){
    console.log("Hello there!!!");
    console.log(widget_name);
    if(widget_name !== this.state.selectedWidget){
      console.log("entrou");
      this.setState({
        selectedWidget: widget_name
      });
    }
  }

  render() {
    return (
      <div class="right-bar-container">
        {widgets.map(widget =>
          <WidgetButton name={widget.key} changeSelectedWidget={this.changeSelectedWidget} url={widget.url}
            image={this.state.selectedWidget === widget.key ? widget.selectedImage : widget.unselectedImage}/>
        )}
      </div>
    );
  };
};

export default RightBar;
