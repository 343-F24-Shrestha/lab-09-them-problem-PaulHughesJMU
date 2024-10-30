///////////////////////////////////////////////////////////////////////////////
// you shouldn't need to edit this first little bit
function toggleLoader(subject) {
  document.getElementById(`${subject}-loader`).classList.toggle('hidden')
}

function noCommaToTheTop(s) {
  return s.replaceAll("'", '')
}

function updateRadio(options) {
  const form = document.getElementById('just-bc')
  form.innerHTML = ''
  let yous = ''
  for (let opt of options) {
    yous += `<label for="${noCommaToTheTop(opt)}"><input type="radio" name="you" id="${noCommaToTheTop(opt)}">${opt}</label>`
  }
  form.innerHTML = yous
}

// this ends the little bit you shoudln't need to edit.
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// below is code that you may need to edit


function getOptions() {
  return new Promise((resolve) => {
    const options = ["poppin'", "packin'"];
    resolve(options);
  });
}

function getThemProblem(you) {
  return new Promise((resolve) => {
    const options = {
      "poppin'": "stoppin'",
      "packin'": "lackin'"
    };
    resolve(options[you] || null);
  });
}


function init(ev) {
  getOptions().then((options) => {
    updateRadio(options);
    
    document.querySelectorAll("input[type='radio']").forEach((input) => {
      input.addEventListener('change', changed);
    });
  });
}

function changed(ev) {
  const you = ev.target.parentElement.textContent;

  getThemProblem(you).then((they) => {
    const output = document.getElementById('they');
    output.textContent = they || 'err';
  });
}

document.addEventListener("DOMContentLoaded", init);
