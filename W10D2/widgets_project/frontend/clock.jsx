import React from "react";

// 1 is the way weekdays is handled good rpactice? yes
// 2 how to put things that are interpolated into variables. set variables before render
// 3 is tick ok? NO
// 4 is there a Date built in function that provides Month and Weekdays as strings
// 5 component did mount?

class Clock extends React.Component {

    constructor(props) {
        super(props);
        // let date = new Date();
        // this.weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        // this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.state = {
            time: new Date()
            // year: date.getFullYear(),
            // month: date.getMonth(),
            // dayOfMonth: date.getDate(),
            // dayOfWeek: weekdays[date.getDay()],
            // hour: date.getHours(),
            // minute: date.getMinutes(),
            // second: date.getSeconds()
        };
        console.log(this.state.time);
        this.tick = this.tick.bind(this);
    }

    tick() {

        this.setState({
            time: new Date()
        })

    }

    componentDidMount() {
        this.intervalId = setInterval( this.tick , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
        // removes setIntervals and event listeners etc
    }

    render() {
        let seconds = this.state.time.getSeconds();
        return (
          <div>
            <h3>
              Time:
              <span> {this.state.time.getHours()}:</span>
              <span>
                {this.state.time.getMinutes() < 10
                  ? "0" + this.state.time.getMinutes()
                  : this.state.time.getMinutes()}
                :
              </span>
                    <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                </h3>
            <h3>
              Date:
              {this.state.time.toDateString()}
              {/* <span> {this.weekdays[this.state.time.getDay()]}, </span>
              <span>{this.months[this.state.time.getMonth()]} </span>
              <span>{this.state.time.getDate()} </span>
              <span>{this.state.time.getFullYear()}</span> */}
            </h3>
          </div>
        );
    }

    
}

export default Clock;