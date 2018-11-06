import createTempate from '../modules/createTemplate.js';
import renderTemplate from '../modules/renderTemplate.js';
import game3 from './game-3.js';
import header from './header.js';

const moduleHtml = createTempate(`
    ${header}
    <div class="game">
        <p class="game__task">Угадай, фото или рисунок?</p>
        <form class="game__content  game__content--wide">
            <div class="game__option">
                <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
                <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--wide  game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
                </label>
            </div>
        </form>
        <div class="stats">
            <ul class="stats">
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--correct"></li>
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--unknown"></li>
            </ul>
        </div>
    </div>
    `);

const game = moduleHtml.querySelector(`.game`);
const gameForm = game.querySelector(`.game__content`);

gameForm.addEventListener(`click`, (e) => {

  if (e.target.tagName === `INPUT`) {
    const name = e.target.name;
    gameData[name] = e.target.value;
    if (gameData.question1 !== null) {
      renderTemplate(game3);
    }
  }
});

const gameData = {
  question1: null
};

export default moduleHtml;
