import React from 'react';

import { TaskTimer } from 'tasktimer';

import timerStyles from './timer.module.css';



class Timer extends React.Component {

    state = {
        timerSeconds: 0,
        timerMinutes: 0
    }
    constructor (props) {
        super(props)

       this.timerInit()
    }
     
    timerInit = () => {
        const timer = new TaskTimer(1000);

        timer.on('tick', () => {
            const currentTimerSeconds = this.state.timerSeconds;
            const currentTimerMinutes = this.state.timerMinutes;

            //console.log(`Tick count: ${timer.tickCount}`)
            if (currentTimerSeconds === 60) {
                this.setState({
                    timerSeconds: 0,
                    timerMinutes: currentTimerMinutes + 1 
                })
            } else {
                this.setState({
                    timerSeconds: currentTimerSeconds + 1 
                })
            }
               
            
           
        });
        timer.start();
    }
     
    render () {
        const { timerMinutes, timerSeconds } = this.state

        return (
            <div className={timerStyles.timerFont}>
                {timerMinutes > 0 && 
                    <span>{timerMinutes}:</span>
                }
                <span>{this.state.timerSeconds}</span>
            </div>
        )
    }
}

export default Timer