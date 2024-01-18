let score = 0;
let clickValue = 1;
let autoClickers = 0;
let autoClickerPrice = 10;
let superClickerPrice = 50;

function clickCookie() {
  score += clickValue;
  updateScore();
  showNotification("+1");
}

function buyUpgrade(cost, value) {
    if (score >= cost) {
      score -= cost;
      clickValue += value;
      autoClickers += value;
      updateScore();
      updateUpgrades();
      startAutoClickers();
  
      // Incrementar el precio del clicker
      if (value === 1) {
        autoClickerPrice += Math.ceil(autoClickerPrice * 0.2); // Aumentar en un 20%
        document.getElementById('autoClickerPrice').textContent = autoClickerPrice;
      } else if (value === 5) {
        superClickerPrice += Math.ceil(superClickerPrice * 0.2); // Aumentar en un 20%
        document.getElementById('superClickerPrice').textContent = superClickerPrice;
      }
    } else {
      alert("Not enough cookies to buy this upgrade!");
    }
  }

function startAutoClickers() {
  setInterval(function() {
    score += autoClickers;
    updateScore();
  }, 1000);
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `${score} Cookies`;
}

function updateUpgrades() {
    const upgradesElement = document.getElementById('upgrades');
    upgradesElement.innerHTML = `
      <h2>Upgrades</h2>
      <button onclick="buyUpgrade(${autoClickerPrice}, 1)">Auto Clicker (+1/sec) - <span id="autoClickerPrice">${autoClickerPrice}</span> Cookies</button>
      <button onclick="buyUpgrade(${superClickerPrice}, 5)">Super Clicker (+5/sec) - <span id="superClickerPrice">${superClickerPrice}</span> Cookies</button>
    `;
  }

function showNotification(message) {
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, 2000);
  }