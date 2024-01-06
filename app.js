const btn = document.querySelector('#btn');
const list = document.querySelector('#list');
const inp = document.querySelector('#inp');
btn.addEventListener('click',(e)=>{
    const li = document.createElement('li');
    li.innerText = inp.value;
    if(inp.value===''){
        alert("Can't enter empty values");
    }
    else{
        list.appendChild(li);
        inp.value='';
        li.addEventListener('dblclick',()=>li.remove());
        li.addEventListener('click',()=>li.classList.add('strikeoff'))
    }
})
