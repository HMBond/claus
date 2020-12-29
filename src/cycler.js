export class Cycler {
    interval = null;
    iterations = 0;
    up = true;
    playing = false;

    constructor({ from, to, idle, duration, maxIterations }) {
        this.from = from;
        this.to = to;
        this.idle = idle ? idle : this.from;
        this.duration = duration ? duration : 400;
        this.maxIterations = maxIterations ? maxIterations : -1;
    }

    play(store) {
        if (this.maxIterations === 0 || this.playing) return;
        this.playing = true;
        this.interval = setInterval(() => {
            this.up ? store.set(this.to) : store.set(this.from);
            this.up = !this.up;
            if (this.maxIterations !== -1) this.stopAtMax(store);
        }, this.duration / 2);
    }
    
    stopAtMax(store) {
        this.iterations++;
        if (this.iterations >= this.maxIterations * 2) {
            this.stop(store);
        }
    }

    stop(store) {
        this.interval && clearInterval(this.interval);
        this.interval = null;
        store.set(this.idle);
        this.iterations = 0;
        this.playing = false;
    }
}
