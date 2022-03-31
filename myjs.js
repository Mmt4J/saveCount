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
            store.textContent = 0;
            value.textContent = 0;
        }		
	//Assigning colors for the value
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
		
	if(styles.contains('save')){
	let storage = store.textContent;
	store.textContent = Number(storage) + count;
        value.textContent = 0;
        count = 0;
	}

       
    })

});
