import React from 'react';

import { TaskTimer } from 'tasktimer';



class Timer extends React.Component {
    
    render () {
        const timer = new TaskTimer(5000);
        timer.on('tick', () => console.log(`Tick count: ${timer.tickCount}`));
        timer.start();
        return (
            <div>
                
            </div>
        )
    }
}

export default Timer