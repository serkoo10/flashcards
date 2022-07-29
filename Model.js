const fs = require('fs').promises;

class Model {
  async getTopics() {
    const topic1 = await fs.readdir('./topics');
    const topic = topic1.map((el) => el.slice(0, -4));
    return topic;
  }

  async getQuestion(str) {
    const obj = {};
    const text = await fs.readFile(`./topics/${str}.txt`, 'utf8');
    const arr = text.split('\n').filter((el) => el !== '');
    for (let i = 0; i < arr.length - 1; i += 2) {
      obj[arr[i]] = arr[i + 1];
      
    }
    return obj;
  }

}  


module.exports = Model;