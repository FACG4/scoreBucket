import React, {
    Component
  } from 'react';
  import '../startPage/startPageStyle.css';
  import './winnerPageStyle.css';

  import '../App.css';

  class WinnerPage extends Component {
    // constructor(props) {
    //   super(props);
    //   }

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


        <div className="container">
         <h1 className="gameName">Game One</h1>
            <div className="cupImage">
              <img className="cup" src={require('./trophy.png')} alt="Smiley face" />
           </div>
           <p className="congrat">Congratulations</p>
            <p className="winnerName">Razan</p>

            <div className="stars">
             <div className="star1 " >
              <img src={require('./star.png')}   alt=""/>
             </div>

            <div className="scoreNoDiv">
             <p className="scoreNo">20</p>
            </div>

            <div className="star2">
             <img  src={require('./star.png')}  alt="" />
            </div>

            </div>
    </div>
             <button className='done-btn' onClick={() => this.props.changingFun('StartPage')}>Done</button>

          </div>
        </div>
      );
    }

  }
  export default WinnerPage;
