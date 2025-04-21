const fraudList = ['speed man', 'lucky cash', 'golden empire', 'big win', 'money rain', 'pix ganho'];
const keywords = ['ganha dinheiro rápido', 'pix automático', 'lucro garantido', 'sem esforço', 'invista e receba'];

function analyzeGame() {
  const input = document.getElementById('gameInput').value.toLowerCase();
  const resultContainer = document.getElementById('resultContainer');
  const riskBar = document.getElementById('riskBar');
  const riskLevel = document.getElementById('riskLevel');
  const feedback = document.getElementById('gameFeedback');

  let score = 0;

  fraudList.forEach(game => {
    if (input.includes(game)) score += 50;
  });

  keywords.forEach(keyword => {
    if (input.includes(keyword)) score += 10;
  });

  if (score > 80) {
    riskBar.style.background = 'red';
    riskLevel.textContent = 'Risco MUITO ALTO';
    feedback.textContent = 'Este jogo tem fortes indícios de fraude. Evite envolver-se.';
  } else if (score > 50) {
    riskBar.style.background = 'orange';
    riskLevel.textContent = 'Risco ALTO';
    feedback.textContent = 'Este jogo pode ser suspeito. Pesquise melhor antes de usar.';
  } else if (score > 20) {
    riskBar.style.background = 'yellow';
    riskLevel.textContent = 'Risco Moderado';
    feedback.textContent = 'Tenha cautela. Pode ser duvidoso.';
  } else {
    riskBar.style.background = 'green';
    riskLevel.textContent = 'Baixo Risco';
    feedback.textContent = 'Nenhum sinal grave encontrado, mas continue atento.';
  }

  resultContainer.classList.remove('hidden');
  saveToHistory(input);
}

function saveToHistory(entry) {
  const historyList = document.getElementById('historyList');
  const li = document.createElement('li');
  li.textContent = entry;
  historyList.appendChild(li);
}
