// 적용하기 버튼이 클릭되었을때
const appplyBtn = document.querySelector("apply-btn";

appplyBtn.addEventListener("click", function(){

// input요소들을 모두 얻어오기
const bowWidth = document.querySelector("#box-width");
const boxHeight = document.querySelector("#box-height");
const fs = document.querySelector("#fs"); //크기

const fw = document.querySelector("[name='fw']:checked"); //크기

const fontcolor = document.querySelector("#box-fontcolor"); //글씨색
const bgcolor = document.querySelector("#box-bg-color"); //글씨색

const row = document.querySelector("[name'align-row']:checked"); //정렬(가로)
const col = document.querySelector("[name'align-col']:checked"); //정렬(세로)

const content =document.querySelector("#content"); // 작성글

const box = document.querySelector("box"); // 박스요소(대상)

//input 에 작성된 값에 따라 #box에 스타일 추가
//추가로 각각 if문 삽입
if(boxWidth.value.trim().length > 0){  
box.style.width = boxWidth.value + "px";
}

if(boxHeight.value.trim().length > 0){  
box.style.height = boxHeight.value + "px";
}

box.style.fontSize = fs.value + "px";

if(fw != null ){
box.style.fontWeight = fw.value;
}

box.style.color = fontcolor.value;
box.style.backgroundcolor = bgcolor.value;

box.style.justifyContent = row.value;
box.style.alignItems = col.value;

box.innerText = content.value;
});

