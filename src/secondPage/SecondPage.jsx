import React, {
  Component
} from 'react';
import './secondPageStyle.css';
import '../startPage/startPageStyle.css';
import '../App.css';

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName:'',
      players : [],
      // arr: [],
      name:'',
      idCounter: 0
    }
  }

  addPlayer = () => {
    const { name, players, idCounter } = this.state;
      if(players.length <= 7){
        const newPlayer = {
          id: idCounter + 1,
          name,
          score: 0
        };
        this.setState({ players: [...players, newPlayer], idCounter: idCounter + 1, name: '' });  
        }
  }

  removePlayer = (key) => {
          //   this.setState({
          //   arr: this.state.arr.slice(key)
          // })  
  }

  inputValue=(event) => this.setState({name:event.target.value})
  inputGameValue=(event) => this.setState({gameName:event.target.value})


  

  render() {
    // const inputsNo = this.state.arr;
    const { players } = this.state;
    
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
           <div className='game-name-label'>Game Name</div>
          
           <input className='game-name-input' placeholder='game name' onChange={(event)=>this.inputGameValue(event)} />
           </div>

           <div className='container-player-name'>
           <div className='players-name-label'>Players names</div>
           <input className='player-name-input' placeholder='player name' value={this.state.name} onChange={(event)=>this.inputValue(event)} required/>
           <button className='plus-btn' onClick={this.addPlayer}><b>+</b></button>
           </div>
           <div className='container-player-name-table'>
           {players.map(({ id, name }) => (
             <div key={id}>
             <input  className='player-name-input' value={name} readOnly />
             <button   className='plus-btn'  onClick={this.removePlayer}><b>-</b></button>
             </div>
            ))}
            </div>
 

           <button className='start-btn next-btn'  onClick={() => this.props.changingFun('ThirdPage',this.state.gameName)}>Next</button>

        </div>
      </div>
    );
  }

}
export default SecondPage;
