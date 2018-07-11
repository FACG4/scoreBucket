import React, {
  Component
} from 'react';

import StartPage from './startPage/StartPage.jsx';
import SecondPage from './secondPage/SecondPage.jsx';
import ThirdPage from './thirdPage/ThirdPage.jsx';
import WinnerPage from './winnerPage/WinnerPage.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nameOfView : 'StartPage',
    nameOfGame:'' }

    this.changeView=this.changeView.bind(this)
  }

  changeView(newView,name){
    this.setState({nameOfView:newView,nameOfGame :name
    })
  }

  render() {
      switch (this.state.nameOfView) {
        case 'StartPage':
          return (<StartPage changingFun={this.changeView} />);

        case 'SecondPage':
          return (<SecondPage changingFun={this.changeView} />);

        case 'ThirdPage':
          return (<ThirdPage changingFun={this.changeView} nameGame={this.state.nameOfGame} />);
          
        case 'WinnerPage':
          return (<WinnerPage changingFun={this.changeView} />);

        default:
          return (<StartPage changingFun={this.changeView} />);
    }
  }
}
export default App;
