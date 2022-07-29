const { Select, Input } = require('enquirer');
const fs = require('fs');

class View {
  async showTopics(topics) {
    this.topicPrompt = new Select({
      name: 'topic',
      message: '\' Покажи, кто тут папа\'\nВыбери тему',
      choices: topics,
    });

    const topic = await this.topicPrompt.run();
    return topic;
  }

  async showQuestion(quest) {
    const questPrompt = new Input({
      message: `${quest}`,

    });
    return questPrompt.run();
  }

  funcResult(bool) {
    if (bool === true) {
      console.log('\n Идем дальше!\n');
    } else {
      console.log('\nТут не повезло, давай некст\n');

    }
  }

  funcShowScores(num) {
    console.log(`Мегахарош у тебя  правильных ответов: ${num}.\n👇Сыграй еще раз👇\n`);
  }
}

module.exports = View;