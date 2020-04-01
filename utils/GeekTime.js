const EventEmitter = require('events').EventEmitter;

class GeekTime extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('newLesson', { price: Math.random() * 100 });
        }, 3000)
    }
}
const geektime = new GeekTime();
exports.GeekTime = geektime;