export class Walker {
    interval = null;

    walk(store, from, to, walkingSpeed) {
        if (!this.interval)
            this.interval = setInterval(() => {
                store.update((value) => (value === from ? to : from));
            }, 1000 / walkingSpeed);
    }

    stopWalking(store, value) {
        this.interval && clearInterval(this.interval);
        store.set(value);
        this.interval = null;
    }
}
