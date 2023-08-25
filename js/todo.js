const msg = document.querySelector('.call');
const title = document.querySelector('.title');

const profile_name = localStorage.getItem('prof_name');
msg.textContent = `Welcome ${profile_name}!`;
title.textContent = `${profile_name} - Create your own todolist now`;

const task_container = document.querySelector('.page');
const input = document.querySelector('.insert');
const add_btn = document.querySelector('.add');

const count = document.querySelector('.count');
const allBtn = document.querySelector('.all');
const activeBtn = document.querySelector('.active');
const compBtn = document.querySelector('.completed');

let input_array = [];

add_btn.addEventListener('click',()=>{
    addEvent();
});

const addEvent = () =>{
    if(input.value != '' && !input_array.includes(input.value)){

        // Preventing duplication
        input_array.push(input.value);

        // TaskBox div
        const task_box = document.createElement('div');
        task_container.appendChild(task_box);
        task_box.classList.add('task');

        // Text
        const text = document.createElement('p');
        task_box.appendChild(text);
        text.classList.add('text');
        text.textContent = input.value;
         
        const buttons = document.createElement('div');
        task_box.appendChild(buttons);
        buttons.classList.add('content');

        // Buttons
        const tick = document.createElement('button');
        const del = document.createElement('button');
        buttons.appendChild(tick);
        buttons.appendChild(del);

        tick.classList.add('btn');
        del.classList.add('btn');
        
        tick.innerHTML='<img src="../img/check-mark.png" class="tick "alt="tick" />';
        del.innerHTML='<img src="../img/delete.png" class="delete"alt="delete" />';


        // Event Listeners
        tick.addEventListener('click',()=>{
           text.style.textDecoration='line-through';
        });
        del.addEventListener('click',()=>{
             buttons.parentElement.remove();
        });
        allBtn.addEventListener('click',() => {
            task_box.style.display = 'flex'
        })
        activeBtn.addEventListener('click',() => {
            if(text.style.textDecoration == 'line-through'){
                   task_box.style.display = 'none'
            }
            if(text.style.textDecoration != 'line-through'){
                task_box.style.display = 'flex'
            } 
        });
        compBtn.addEventListener('click',()=> {
            if(text.style.textDecoration != 'line-through'){
                task_box.style.display = 'none'
            }
            if(text.style.textDecoration == 'line-through'){
                task_box.style.display = 'flex'
            }  
        })
         
    }
    else if(input.value==''){
       alert('Please Enter a Task.');
    }
    input.value='';
};