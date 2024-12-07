const main__btn = document.querySelector('.main__btn');
let main__text = document.querySelector('.main__text');

let All__Text = [
  "Ти для мене справжнє натхнення.",
  "Дякую за те, що ти у мене є.",
  "Твоя усмішка робить мій день яскравішим.",
  "Ти особлива для мене.",
  "Мені подобається, як ти дивишся на світ.",
  "Твої ідеї завжди надихають.",
  "З тобою кожен момент стає особливим.",
  "Ти робиш мене щасливим.",
  "Мені просто добре, коли ти є.",
  "Ти завжди знаєш, як підтримати.",
  "Мені подобається, як ти втілюєш свої ідеї в життя.",
  "Ти приносиш тепло у кожен день.",
  "Я пишаюся тим, що знаю тебе.",
  "Твої досягнення мотивують мене рухатись далі.",
  "Ти завжди залишаєшся собою, і це прекрасно.",
  "З тобою легко бути щирим.",
  "Твої слова завжди влучні та мудрі.",
  "Ти вмієш зробити навіть звичайний день незабутнім.",
  "Твоя турбота надихає мене бути кращим.",
  "У тебе найгарніше тіло.",
  "Ти у мене сама розумна.",
  "Ти у мене сама сексуальна.",
  "Ти кожного дня надихаєш мене.",
]

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function RandomText(){
  let x = getRndInteger(0, All__Text.length);
  return All__Text[x];
}
function OutputPage(){
  main__text.innerHTML = `${RandomText()}`;
}

main__btn.addEventListener('click', OutputPage)