// const geektime = require('../utils/index').GeekTime
// geektime.addListener('newLesson', (obj) => {
//     if (obj.price < 80) {
//         console.log('buy')
//     }
// })


// try {
//     interview (function (res) {
//         if (res) {
//             return console.log('cry')
//         }
//         console.log('smile')
//     })
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
 
/**
 *  promise
 */
// var promise = interview(1);
// promise.then(() => {
//     return interview(2);
// }).then(() => {
//     return interview(3)
// }).then(() => {
//     console.log('smile')
// }).catch((err) => {
//     console.log('cry at ' + err.round + 'round')
// })

function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                // callback(null, 'success')
                resolve('sucess');
            } else {
                // callback(new Error('fail'))
                // throw new Error('fail')
                var error = new Error('fail')
                error.round = round
                reject(round)
            }
        }, 500)
    })
   
}

// (function () {
//     const result = async function() {
//         try {
//             var content = await new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     reject(new Error('8'))
//                 }, 500)
//             })
//         } catch (e) {
//             console.log('error', e.message) // catch 能捕捉到
//         }
//         console.log(content)
//         return 4
//     }()
// })

(async function () {
    try {
        await interview(1);
        await interview(2)
        await interview(3)

        await Promise.all([interview(1), interview(2)])
    } catch(e) {
        return console.log('cry at', e.round)
    }
    console.log('smile')
})()