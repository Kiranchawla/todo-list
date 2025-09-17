const table = document.getElementById("list_container");
const input =document.querySelector("input");
const addbtn = document.getElementById("add");
const newValue = input.value;

window.onload=()=>{
    console.log('correction');
    myArray=JSON.parse(localStorage.getItem('todos'))|| []
    myArray.forEach((v, i) =>{
const row = document.createElement("tr");
row.id='myRow';

        row.innerHTML = `<td id='inputrow'>${v}</td> `+`<td id='completed'><label><h4>Completed:</h4></label><br><hr><input type='checkbox' name='completed' value='Yes' class='yes' id='yes' onclick='selectOnlyThis(this)'><label><pre><bold>Yes  </bold>  </pre></label><input type='checkbox' name='completed' value='No' id='no-ask-reason'   class='no' data-index='${i}' onclick='selectOnlyThis(this)' ><label><bold>NO</bold></label></td><br>`+`<button  id='del' onclick='deleteItem(event)' >DELETE</button>`//+`<td class='reasoncell'></td>`//`<td class='reason-${i}'><p id=''></p></td>` // same as above
        table.append(row);
        update()
    })


// const row = document.createElement("tr");
//         row.innerHTML = `<td>${v}</td> ...`; // same as above
//         table.appendChild(row);
}
//console.log(row);

input.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
       // event.preventDefault();
        update();
    }
});

input.addEventListener('input',() =>{
   addbtn.disabled = input.value.trim() === '';  
   if(input===''||input===null){
    alert("Task must be filled out");
    return false;
   } 
   
})


    let myArray =  ['test'];
    input.addEventListener('input',() =>{
   addbtn.disabled = input.value.trim() === '';
   ;
})

// console.log(localStorage);
// function addUniqueInput(){
//     if(myArray.includes(input.value)){
//         alert("this item is already in the list");
        
//     }else {
        
//         myArray.push(input.value);
//         console.log('Added:',input,'current array:',myArray)
//     }
// }
// // document.getElementById('add').addEventListener('click',()=>{
//     if(input){
//         addUniqueInput(input);
//         document.getElementById('input').value = '';
        
//     }
//     console.log(input,myArray);
// })
// function saveTodos(myArray) {
//   localStorage.setItem("todos", JSON.stringify(input.value));
// }
// JSON.parse(localStorage.getItem('userTasks'))
// const getItem = () => {
//     const storeTasks = localStorage.getItem('userTasks');
//     console.log(storeTasks);
//     if(storeTasks){
//         console.log(JSON.parse(storeTasks))
//         myArray = JSON.parse(storeTasks);
//         console.log(myArray, "ttt");
//      }
// };


function update()
{  

    const value = input.value.trim();
    if (!value) return;                    // stop if empty

    if (myArray.includes(value)) {         // avoid duplicates
        alert("This item is already in the list");
        input.value = '';
        return;
    }
    const list = document.createElement("tr");

    console.log(myArray);

    // if(myArray.includes(input.//value)) { 
    //     alert("this item is already in the list");
    //     input.value ='';
    //     return;
    // }


        console.log('Added:',input,'current array:',myArray)


        // myArray.forEach(v => {
        //     console.log(v);
        // list.innerHTML='<td id="inputvalue">'+v+'</td>' + "<td id='completed'><label><h4>Completed:</h4></label><br><hr><input type='checkbox' name='completed' value='Yes' class='rec' onclick='selectOnlyThis(this)'><label><pre>Yes    </pre></label><input type='checkbox' name='completed' value='No' id='no-ask-reason' onchange='noAskReason()'  class='rec' onclick='selectOnlyThis(this)' ><label>NO</label></td><br>"+"<button  id='del' onclick='deleteItem(event)' >DELETE</button>"+"<p id='reasons'></p>"
        // });

                //table.append(list);
        //         if(myArray.includes(input.value)) { 
        // alert("this item is already in the list");
        // input.value ='';
        // return;
   // }
myArray==myArray.filter(input=>input.trim() !=='');

// if(myArray[1]==null || myArray[1].trim?.()===''){
//     myra
// }
     myArray.push(input.value);
     
     localStorage.setItem('todos',JSON.stringify(myArray));
    //  localStorage.setItem("todos",JSON.stringify(myArray));
    //  console.log( JSON.parse(localStorage.getItem("todos")) || []);
              input.value = '';


}

//  const popupoverlay = document.querySelector('.popup-overlay')
//     const popupbox = document.querySelector('.popup-box')
//     const noaskreason = document.getElementById('no-ask-reason')
//     let tbody=document.getElementById('tbody');
//    let currentRow=null;
//     function noAskReason(e){
        
//         let checkbox=document.querySelector('.no');
//         currentRow=checkbox.closest('tr');
//         popupoverlay.style.display = 'block';
//         popupbox.style.display = 'block';
//     }
// tbody=function (event){
//     if(event.target.classlist.contains('no')){
//         if(event.target.checked){
//             currentRow=e.target.closest('tr');
//              popupoverlay.style.display = 'block';
//         popupbox.style.display = 'block';
//         } else {
//             currentRow=null;
//         }

//     }
// }
function selectOnlyThis(checkbox) {
     //et currentReasonId=null;
    const currentRow = checkbox.closest("tr");

if(!currentRow)return;
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
   const yes=currentRow.querySelector('.yes');
   const no = currentRow.querySelector('.no');
  [yes,no].forEach(box => {
if(box !==checkbox)box.checked = false;
  })
          //  currentRow = checkbox.closest("tr");
            if(no.checked) {
                prompt("reason for incompletion");
   //currentReasonId=no.dataset.reasonId;
   // popupoverlay.style.display = 'block';
    //popupbox.style.display = 'block';
  }else if(yes.checked){
    alert("congratulation!!!")
  }

}
//    const addbutton = document.getElementById("add-reason");

//     document.getElementById('add-reason').addEventListener('click',(e)=>{
//         const reasoninput=document.querySelector('.reason-for-incompletion');
        
//         const br=document.createElement('br')
// if(reasoninput&&currentRow){
//                const reasoncell = currentRow.querySelector('.reasoncell');
//     const p = document.createElement('p');
//      p.textContent=reasoninput.value;
//       reasoncell.appendChild(p);
    
// }
//  popupbox.style.display='none';
//    popupoverlay.style.display='none';
//        document.querySelector('.reason-for-incompletion').value='';
//        return;
//     }
// );
//        // p.append(br);
//        // reason.innerHTML=generateit()
//       // const uniqueId=`reason-${i}`
//        //p.id=uniqueId;
      
      
//     // const text=document.querySelector('.reason-for-incompletion').value;
//     // if(currentReasonId){
    //     document.getElementById('currentReasonId').textContent='some text';
    // }
    //reasonoutput.textContent=reasoninput.value;
   

// function generateit(){
//     return `<p id='reasonoutput'></p>`
//     reasonoutput.textConten=reasoninput.value;

// }
// //.addEventListener('click',e=>{
    





    // if (cb ) {
    //   item.checked = false;
    // }


// let retriving=function view(){
//     if(localStorage.getItem('userTask')!= null){
//         document.getElementById()
//         document.getElementById('tr').innerHTML.JSON.parse(localStorage.getItem('userTasks'));
//     }
// }


// function noAskReason(){

// }
//console.log(myArray);
  
/*
const setError = (input,message)=>{
    const inputControl = input.ParentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.list.add('error');
    inputControl.list.remove('error');
}
const setSuccess = input=>{
    const inputControl = input.ParentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.list.add('error');
}*/
// const validateInput=()=>{
//     const inputvalue=input.value.trim();
//     if(inputvalue === ' '){
//         setError(input,'Task is required');

//     } else {
//         setSuccess(input);
//     }
// }
// input.addEventListener('keypress',function(event){
//     if(event.key === 'Enter'){
//         event.preventDefault();
//         addbutton();
//     }
// });

function deleteItem(event)
    {
      const row=event.target.closest('tr');
      const tasktext = row.querySelector('#inputrow').textContent.trim();
      row.remove();
      let myArray = JSON.parse(localStorage.getItem("todos")) || [];
  myArray = myArray.filter(item => item !== tasktext);
  localStorage.setItem("todos", JSON.stringify(myArray));
}

    //  localStorage.setItem("todos", JSON.stringify(myArray.filter(u => u.input !== input)));
//     localStorage.removeItem(event);
//     localStorage.setItem(event, JSON.stringify(this.items));
// this.items.splice(event);

  


   
//     const cancelbutton = document.getElementById("cancel")
//     cancelbutton.addEventListener('click',function(){
//         popupoverlay.style.display='none'
//         popupbox.style.display='none'
//     })
//  //document.addEventListener("DOMContentLoaded", () => {
    // const reasonsforincompletion = document.getElementById("reason-for-incompletion");
// const reasons = document.getElementById("reason-0");
    //   const reasonsforincompletion = document.getElementById("reason-for-incompletion");
  
    //addparagraphbutton=addbutton
    //addparagrahcheckbox=reasons
    //userinput=noaskreason
    
   /* addbutton.addEventListener("click",  ()=> {
         //reasonsfor.value='';
          const reasonsforincompletion = document.getElementById("reason-for-incompletion");
        //const reasonsfor = reasonsforincompletion.value.trim();
 
        if(!currentRow)return;
       // currentRow.querySelector('.reason p').textContent= reasonsforincompletion;
       const reasons=document.querySelector('.reasons-1');
       reasons.textContent=reasonsforincompletion.value;
        reasonsforincompletion.value = '';
        popupbox.style.display='none';
        popupoverlay.style.display='none';
    });*/
       // const p=e.target.dataset.row
        //const reasons = document.getElementById('reason-0');
    
          // const reasonsforincompletion = document.getElementById("reason-for-incompletion");
        //const reasonsfor = reasonsforincompletion.value.trim();
        // reasonsfor.value='';
        //const reasonP =currentRow.querySelector(`.reason p`);
        //reasonP.textContent=reasonsfor
       // const i=e.target.dataset.row
       // reasons.textContent = reasonsforincompletion.value.trim();
       // reasonsfor.value='';
       // popupoverlay.style.display='none';
       // popupbox.style.display='none';
       // reasonsfor.value='';
    
    


        // const reasons = chec
       // const reasons = document.getElementById("reason-1");
     
        // put textarea value into <p>
        //console.log(reasons);

       // reasons.innerHTML = reasonsforincompletion.value;
       // reasonsforincompletion.value='';
        // hide popup

   // });
//});
 /*addbutton.addEventListener('click',() => {
    const reasons = document.getElementById(`reason-1`);
    const reasonsforincompletion = document.getElementById("reason-for-incompletion");
    //currentRow.querySelector('.reason p').textContent= reasonsforincompletion;
         reasons.textContent = reasonsforincompletion.value;
         popupoverlay.style.display = 'none';
         popupbox.style.display = 'none';


      })*/
//  const reasonsforincompletion = document.getElementById("reason-for-incompletion");
//          function saveReason(i,reasonsforincompletion){
            
//             const ptag= document.getElementById(`reason-${i}`)
//             if(ptag){
//                 ptag.textContent=reasonsforincompletion;

//             }
//          }
//          saveReason(currentRow,reasonsforincompletion);
//     // noaskreason.addEventListener('click', function(){



    //     popupoverlay.style.display='block';
    //     popupbox.style.display = 'block';
    // })

    /*
    addtodo.addEventListener('click',(e)=>{
    e.preventDefault
    let messages=[]
    if(add===' ' || add===null){
        messages.push("This field is required task")
    }
    
})*/
// const saved = JSON.parse(localStorage.getItem('reasons')) || [];

// var resArray=[];
// addbutton.addEventListener('click',() => {
    
//    var resoutputs = document.getElementById(`reason p`);
//     var resinputs = document.querySelectorAll(".reason-for-incompletion");
//     resinputs.forEach((inp,i)=>{
//         console.log(inp)
// const value = inp.value.trim();
// if(!value)return;
//     //resArray.push(value);
// //resArray.push(value);
// resArray.push(value);
//       p = document.getElementById(`reason-${i}`);
//       console.log(`reason-${i}`);
 
//     if(!p){
//         console.log('test');
//         p=document.createElement('p');
//         p.id=`reason-${i}`;
//         inp.parentElement.appendChild(p)
//     }
//     p.textContent = value;

    
//     console.log(resArray);
//     localStorage.setItem('reasons', JSON.stringify(resArray)); 
// //  resoutputs.map((resoutput,i)=>{
// //     const resoutputs = document.getElementById(`reason p`);
// //     const resinputs = document.querySelectorAll(".reason-for-incompletion");

// //        resoutput.textContent=inp.value;
// // //        resoutputs.map((resoutput,i)=>{
// //        resoutput.textContent=inp.value
// //    })
//   popupbox.style.display='none';
//   popupoverlay.style.display='none';
//     inp.value=''; //important!
//         })}
      
    


   // const resArray= Array.from(resinputs,resinput=>resinput.value.trim());


//     resoutputs.map((resoutput,i)=>{
//        resoutput.textContent=resinputs.value
//    })
//     // addbutton.forEach((reason)=>{
    //     reason.addEventListener('input',()=>{
    //     resoutput[i].textContent=reason.value;
    // })
//});
//  var popupbox=document.querySelector(".popup-box")
// var noaskreason = document.getElementById('no-ask-reason')
// noaskreason.addEventListener('change',function(){
//      popupbox.style.display="none"

// }
//localStorage.clear();

//window.onload = retriving;
//localStorage.clear()