// const geektime = require('../utils/index').GeekTime
// geektime.addListener('newLesson', (obj) => {
//     if (obj.price < 80) {
//         console.log('buy')
//     }
// })
// try {
    // interview (function (res) {
    //     if (res) {
    //         return console.log('cry')
    //     }
    //     console.log('smile')
    // })
// } catch (error) {
//     console.log('cry', error)
// }

// interview(function(err) {
//     if (err) {
//         return console.log('cry at 1st round')
//     }
//     interview(function(err) {
//         if (err) {
//             return console.log('cry at 2nd round')
//         }
//         console.log('smile')
//     })
// })



// function interview(callback) {
//     setTimeout(() => {
//         if (Math.random() < 0.8) {
//             callback(null, 'success')
//         } else {
//             callback(new Error('fail'))
//             // throw new Error('fail')
//         }
//     }, 500)
// }

const eventLoop = {
    queue: [],
    timeoutQueue: [],
    fsqueue: [],
    loop() {
        while(this.queue.length) {
            var callback = this.queue.unshift();
            console.log(callback)
            callback();
        }
        setTimeout(this.loop.bind(this), 50);
    },
    add(callback) {
        console.log(callback)
        this.queue.push(callback)
    }

}
// eventLoop.init();
eventLoop.loop();
setTimeout(() => {
    eventLoop.add(() => {
        console.log(1)
    })
}, 500)
setTimeout(() => {
    eventLoop.add(() => {
        console.log(2)
    })
}, 800)