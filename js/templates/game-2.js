import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import game3 from './game-3.js';
import {games, questions} from '../game/data.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';
import answerHandler from '../game/answerHandler.js';
import backToIntro from '../game/backToIntro.js';
import header from './header.js';

const moduleHtml = (state) => {
  const html = createTempate(`
    ${header(state)}
    <div class="game">
        <p class="game__task">${games[state.screen].description}</p>
        <form class="game__content  game__content--wide">
           <form class="game__content">
          ${renderOption(questions[state.currentQuestionIndex].optionList[`option-1`], `option-1`)}
        </form>
        ${renderStats(state.questionsStats)}
    </div>
    `);

  const gameOptions = html.querySelectorAll(`.game__option`);

  const gameData = Object.freeze({
    'option-1': null
  });

  const optionHandler = (data) => {
    if (data[`option-1`]) {
      renderGameTemplate(state, game3);
    } else if (data[`option-1`] === false) {
      renderGameTemplate(state, game3);
    }
  };

  answerHandler(gameOptions, gameData, optionHandler);

  return backToIntro(html);
};

export default moduleHtml;
