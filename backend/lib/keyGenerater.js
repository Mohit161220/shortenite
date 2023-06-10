/**
 * 
 * WHY USED THIS ONLY :: https://github.com/ai/nanoid#readme
 * HIT PROBABILITY WITH SIZE :: https://zelark.github.io/nano-id-cc/
 * MORE ABOUT UNIQUE KEY :: https://gist.github.com/joepie91/7105003c3b26e65efcea63f3db82dfba
 * 
 */

const { nanoid }= require('nanoid');

const generateKey = async function key(){
    let ans = await nanoid(10);
    console.log(ans);
    return ans;
}

module.exports = generateKey;