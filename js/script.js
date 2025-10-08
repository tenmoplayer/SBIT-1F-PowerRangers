const box = document.getElementById('bossContainer');
let count = 0;

class Player {
    constructor() {
        this.strength = 1;
    }
}
class clickEvent {
    constructor() {
        bossContainer.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
            count++;
            showDmg();
            move(player, boss);
            console.log(count);
            checkBossState(boss);
        }
    })
    }
}
class Boss {
    constructor() {
        this.maxHealth = 12;
        this.health = this.maxHealth;
        this.state = true;
        
    }
    takeDamage(player) {
        this.health = Math.max(0, this.health - player.strength);
        if(this.health<=0) {this.state=false;}
    }
    getHealthPercent() {
        return (this.health / this.maxHealth) * 100;
    }
    isDead() {
        return !this.state;
    }
}

function move(player, boss) {
    const elem = document.getElementById("myBar");
    boss.takeDamage(player);

    if (boss.isDead()) {
        
    }
    const percent = boss.getHealthPercent(); 
    elem.style.width = percent + "%";

    console.log(`Boss health: ${boss.health} (${percent.toFixed(1)}%)`);
}
function showDmg() {
    bossContainer.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;

    const float = document.createElement('div');
    float.className = 'float';
    float.textContent = '-'+ parseInt(player.strength); 
    float.style.left = e.pageX + 'px';
    float.style.top = e.pageY + 'px';

    document.body.appendChild(float);

    setTimeout(() => float.remove(), 1000);
  });
}
function checkBossState() {
    if (boss.isDead()) {
        document.getElementById('message').classList.add('show');
    }
 }
const player = new Player();
const boss = new Boss();
const clickevent = new clickEvent(player, boss);
