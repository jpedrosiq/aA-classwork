// Callbacks Project

class Clock {
    constructor() {

        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.printTime();
        let clock_tick = this._tick();

        setInterval(() => this._tick(), 1000);

    }

    printTime() {

        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time);

    }

    _tick() {
        this.seconds++;
        if (this.seconds >= 60 ) {
            this.seconds = this.seconds % 60;
            this.minutes++;
        }

        if (this.minutes >= 60 ) {
            this.minutes = this.minutes % 60;
            this.hours++;
        }

        if (this.hours >= 24 ) {
            this.hours = this.hours % 24;
        }

        this.printTime();
    }
}

    const clock = new Clock();
