import React, {
  Component
} from 'react';
import './thirdPageStyle.css';
import '../startPage/startPageStyle.css';

import '../App.css';

class ThirdPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   gameName:''
    // }

    }


componentDidMount = () => {
  // this.setState({    gameName: this.state.gameName  })  
  // console.log('fff',this.props.nameGame);
}



  render() {
    
    return (
      <div className= 'backgroung-image App'>
        <div className='overlay'>

           <div className='header'>
            <div className='container-logo-name'>
              <div className='logo' />
              <div className='app-name'>Score Bucket</div>
            </div>
           </div>

           <div className='container-game-name'>
              <div className='game-name-label'>{this.props.nameGame}</div>
           </div>

           <div className='container-score-input'>
              <input className='score-input' value='Score' readOnly/>
           </div>

          <div className='container-score-tabel'>
            <input className='player-name-input-score' value='Balsam' readOnly/>
            <button className='plus-one-btn'><b>+1</b></button>
            <button className='plus-five-btn'><b>+5</b></button>
            <button className='plus-ten-btn'><b>+10</b></button>
            <div className='score-num'>40</div>
            <input className='player-name-input-score' value='Balsam' readOnly/>
            <button className='plus-one-btn'><b>+1</b></button>
            <button className='plus-five-btn'><b>+5</b></button>
            <button className='plus-ten-btn'><b>+10</b></button>
            <div className='score-num'>40</div>
            <input className='player-name-input-score' value='Balsam' readOnly/>
            <button className='plus-one-btn'><b>+1</b></button>
            <button className='plus-five-btn'><b>+5</b></button>
            <button className='plus-ten-btn'><b>+10</b></button>
            <div className='score-num'>40</div>

          </div>

           <button className='start-btn next-btn end-btn' onClick={() => this.props.changingFun('WinnerPage')}>End game</button>

        </div>
      </div>
    );
  }

}
export default ThirdPage;
