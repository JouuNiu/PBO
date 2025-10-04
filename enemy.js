class Enemy {
    constructor(name, speed, health, defend) {
        this.name = name;
        this.speed = speed;
        this.health = health;
        this.defend = defend;
    }
    attack() {
        console.log(`${this.name} is attacking!`);
    }
    move() {
        console.log(`${this.name} is moving at speed ${this.speed}.`);
    }
    dash() {
        console.log(`${this.name} is dashing!`);
    }
    getInformation() {
        console.log(`${this.name}, Has Speed: ${this.speed}, Health: ${this.health}, Defend: ${this.defend}`);
    }
}
const enemy = new Enemy("Goblin", "2", "5", "100", "2");
enemy.attack();
enemy.move();
enemy.dash();
enemy.getInformation();