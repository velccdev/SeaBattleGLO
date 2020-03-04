const record = document.getElementById("record");
const hit = document.getElementById("hit");
const dead = document.getElementById("dead");
const shot = document.getElementById("shot");
const enemy = document.getElementById("enemy");
const again = document.getElementById("again");

const play = {
    record: 0,
    hit: 0,
    dead: 0,
    shot: 0,
    set updateData(data){
        this[data] += 1;
        this.render();
    },
    render(){
        record.textContent = this.record;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
        shot.textContent = this.shot;
        
    }
};

const show = {
    hit(){

    },
    miss(elem){
        this.changeClass(elem, 'miss');  
    },
    dead(){
        
    },
    changeClass(elem, value){
        elem.className = value;
    }
};

const fire = (event) =>{
    const target = event.target;
    show.miss(target);
    play.updateData = 'shot';
    

} 
const init = () =>{
    enemy.addEventListener('click', fire);

}



