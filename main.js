const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-shot');
const $logs = document.querySelector('#logs');
const character = {
    name: 'Pikachu',
    type: 'electric',
    weakness: ['fighting','water','some'],
    resistance: ['steel'],
    defaultHP:100,
    damageHP:100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
};
const enemy = {
    name: 'Charmander',
    type: 'fighting',
    weakness: ['steel'],
    resistance: ['fighting','water','some'],
    defaultHP:100,
    damageHP:100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
};
function generateLog(firstPerson, secondPerson){
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ,[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];
    return logs[random(logs.length) - 1]
}
$btn.addEventListener('click', function() {
    console.log('Kick');
    changeHP.call(character, random(20));
    changeHP.call(enemy, random(20));
});
$btn1.addEventListener('click', function() {
    console.log('Ulta');
    changeHP.call(character, random(50));
    changeHP.call(enemy, random(50));
});
function init() {
    console.log('Start Game!');
    renderHP.call(character);
    renderHP.call(enemy);
}
function renderHP(){
    renderHPLife.call(this);
    renderProgressbarHP.call(this);
    if(this.name === character.name){
        const { weakness, name, type = 'type isn\'t defined', defaultHP, damageHP} = character;
        console.log(name, type, weakness, damageHP, defaultHP);
    }
    else if(this.name === enemy.name){
        const { weakness:wEn, name:nEn, type:tEn = 'type isn\'t defined', defaultHP:dHP, damageHP:daHP} = enemy;
        console.log(nEn, tEn, wEn, daHP, dHP);
    }
    else{
        console.log('Кого ты ударил?');
    }
}
function renderHPLife(){
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}
function renderProgressbarHP(){
    this.elProgressbar.style.width = this.damageHP + '%';
}
function changeHP(count){
    
    if(this.damageHP<count){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
    
    const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
    
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
    console.log(log);

    renderHP.call(this);
}
function random(num){
    return Math.ceil(Math.random()*num);
}
init();