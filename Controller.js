const fs = require('fs');
class Controller {
  constructor(model, view, topics) {
    this.model = model;
    this.view = view;
    this.topics = topics;
    this.scores = 0;
  }
  async init() {
    const arrTopics = await this.model.getTopics();
    this.topics = arrTopics;
    this.run();
  }
  async run() {
    const topicName = await this.view.showTopics(this.topics);
    const questions = await this.model.getQuestion(topicName);
    for (const key in questions) {
      const answer = await this.view.showQuestion(key);
      const bool = questions[key].toLowerCase() === answer.toLowerCase();
      this.view.funcResult(bool);
      if (bool) this.scores += 1;
    }
    const answer = await this.view.showQuestion(key);
    this.view.funcShowScores(this.scores);
    this.run();
  }
}
module.exports = Controller;