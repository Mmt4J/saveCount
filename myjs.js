// Set initial count
let count = 0;
// Select values and the buttons
const value = document.querySelector('#value');
const store = document.querySelector('#store');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--; 
        } else if(styles.contains('increase')){
            count++;
        } else if(styles.contains('reset')){
            count = 0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "#2f4f4f";
        }
        value.textContent = count;
    })
});

function save(){
	let storage = store.textContent;
	store.textContent = Number(storage) + count;
}

function set(){
	store.textContent = 0;
}
