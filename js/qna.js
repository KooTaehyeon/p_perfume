   // 스토어 드롭다운
   let store_click = document.querySelector('.mume-store');
   // let store_hover = document.querySelector('.mume-store-list>ul>li');

   store_click.addEventListener('mouseover', function () {
       // let store_hover = document.querySelector('.mume-store-list');     
       storeClick.classList.add('displys');
       // storeClick.classList.remove('displys');
   });
   store_click.addEventListener('mouseout', function () {
       // let store_hover = document.querySelector('.mume-store-list');     
       storeClick.classList.remove('displys');
       // storeClick.classList.remove('displys');
   });

   // 모달창 sc
   const models = document.getElementById('models');
   const bodyflow = document.getElementsByTagName('body');

   models.onclick = function () {
       document.body.classList.add('body_flow');
       model.classList.add('model_show');

   }
   model_x.onclick = function () {
       document.body.classList.remove('body_flow');
       model.classList.remove('model_show');

   }

   // 클릭 이벤트

   const noneBox = document.querySelectorAll('.none');
   const blockBox = document.querySelector('.onebox');
   const blockBox2 = document.querySelector('.box_too');

   console.log(noneBox);
   console.log(blockBox);

   blockBox.addEventListener('click',toggles)
   blockBox2.addEventListener('click',toggles)

    function toggles(e){
       const target =e.target;
       // const question = document.querySelector(`${target} #nodes`);
       const target2= e.target.querySelector('.none');
       console.log(target2);

       // console.log(question);
       target2.classList.toggle('active');
   }
   
          
//     function box_block(){
//     console.log(nones);    
//       for(let i=0; i<blockBox.length; i++){    
//         this.nones[i].classList.toggle('active');
//      }
// }