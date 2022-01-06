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

//향수추천 사이트 캐러셀
const re_carouses = document.querySelectorAll('.re_carouses>div');
const reCitem = document.querySelector('.imgative');
console.log(re_carouses);
let next = 0;


const re_car = function reCarouses() {
            re_carouses[next].classList.remove('imgative');
            next = next + 1;
        
            if(next == re_carouses.length){
                next=0;
            }
            re_carouses[next].classList.add('imgative');
};
setInterval(re_car, 2000);

// 필터 기능


const searchs = document.querySelector(".seip");
const searchBtn = document.querySelector(".sebtn");
const lists = document.querySelectorAll(".pergume_in");
const pergumeName =document.querySelectorAll(".pergume_name>span");
const content = document.querySelectorAll('.pergume_cont');
console.log(content);
console.log(pergumeName);
console.log(lists);
searchBtn.addEventListener('click',filters);
function filters(){

    for(let i=0; i<lists.length; i++){
        
        if(searchs.value.trim() == ""){
            alert('공백을 허용하지 않습니다.');
            return;
        }else if(searchs.value.length == 1){
            alert('두글자 이상 적어주세요.')
            return;
        }else if(pergumeName[i].innerText.includes(`${searchs.value}`) || content[i].innerText.includes(`${searchs.value}` )){
            lists[i].style.display = 'block';
        }else{
            lists[i].style.display= "none";
            
        }
    }
}

// notBtn.onclick= function(){
//     notPergume.style.display = 'none';
// }
// 키워드 필터
const keyword = document.querySelectorAll(".re_search_span>span");
const keyName = document.querySelectorAll(".pergume_name");
console.log(keyword);
console.log(keyName);
keyword[0].addEventListener('click',creed)
keyword[1].addEventListener('click',lanvin)
keyword[2].addEventListener('click',versace)
    
    
console.log(lists);
function lanvin(){    
    for(let i =0; i<lists.length; i++){
    
 if(keyName[i].classList.contains("lanvin")){
     console.log("짠");
    lists[i].style.display= "block";
 }else{
     console.log("안짠");
     lists[i].style.display= "none";
 }
}
}

function creed(){    
    for(let i =0; i<lists.length; i++){
    
 if(keyName[i].classList.contains("creed")){
     console.log("짠");
    lists[i].style.display= "block";
 }else{
     console.log("안짠");
     lists[i].style.display= "none";
 }
}
}


function versace(){    
    for(let i =0; i<lists.length; i++){
    
 if(keyName[i].classList.contains("versace")){
     console.log("짠");
    lists[i].style.display= "block";
 }else{
     console.log("안짠");
     lists[i].style.display= "none";
 }
}
}



