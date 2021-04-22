const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');
// const url = 'https://unsplash.com/napi/search?query=tree&xp=&per_page=20';
const url = 'https://unsplash.com/s/photos/animal';
axios.get(url)
    .then(resp => {
        const data = resp.data;
        console.log(data);
        // console.log(data, typeof data);
        const $ = cheerio.load(data);
        const $imgs = $('img')
        // $imgs.each((index, img) => {
        //     const src = img.attributes('src');
        //     // console.log('index', src);
        //     // axios.get(src)
        // } )
        // results.forEach((item, index) => {
        //     console.log(`正在执行${index + 1}..`);
        //     const imageUrl = item.urls.full;
        //     const id = item.id;
        //     axios.get(imageUrl, {
        //         responseType: 'arraybuffer'
        //     }).then(resp => {
        //         const buffer = Buffer.from(resp.data, 'binary');
        //         fs.writeFileSync(path.resolve(__dirname, `./unsplash/${id}`))
        //     })
        // })
    })