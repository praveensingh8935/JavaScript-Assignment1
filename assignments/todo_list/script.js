//const newTodoInput = document.querySelector('input');
//const addTodoBtn = document.querySelector('button');
//const todolist = document.querySelector('div.todos');
//let count = 0;
//addTodoBtn.onclick=function(){
//   var input = newTodoInput.value;
//   if (input.length===0){
//      alert("Please enter a Task")
//    }else{
//      let p = document.createElement('p')
//        p.setAttribute("key",count);
//        p.innerHTML = input
//       todolist.appendChild(p)
//       newTodoInput.value=""
//        document.querySelector(`p[key="${count}"]`).addEventListener('click',function(){
//           todolist.removeChild(this)
//        })
//       count++
//   }
//}
const compBtn=document.querySelector('#compl');
const pendBtn=document.querySelector('#pendi');
async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await res.json();
    let output='';
    compBtn.onclick=function(){
        data.foreach(function(todo,index){
            if(todo.completed==true){
                output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
            }
        })
    }
{
document.querySelector('.todos').innerHTML=output;
}
pendBtn.onclick = function(){
    data.forEach(function(todo,index) {
if (todo.completed == false){
        output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
}})
    document.querySelector('.todos').innerHTML=output;
    }
}
fetchtodo();