import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  
  constructor(props){ 
      super(props);
      this.state = {
          count:0
        }
    }

    startTimer = () => {
        //console.log("inside timer")
        let decrement = this.state.count-1;
        
        if(decrement===0)
        {
            clearInterval(this.timer);
        }

        this.setState({
          count:decrement
        })
    }

    handleCountDowner = (val) => {
        //console.log("inside handlecount")
        if(val!==0)
        {
            this.timer = setInterval(()=>this.startTimer(),1000);
        }
    }
  
    render() {

        return (
            <div>
                <Clock timeInSeconds={this.state.count}/>
                <CountdownForm 
                  onSetCountdownTime={val => this.setState({count:val})} 
                  handleCountDown={val => this.handleCountDowner(val)}    />
            </div>
        );
    }
}

export default Countdown;