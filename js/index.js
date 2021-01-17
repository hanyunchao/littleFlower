let lyric = ['送你一朵小红花',

    '开在你昨天新长的枝桠',
    
    '奖励你有勇气,主动来和我说话',
    
    '不共戴天的冰水啊',
    
    '义无反顾的烈酒啊',
    
    '多么苦难的日子里,你都已战胜了它',
    
    '遮住你今天新添的伤疤',
    
    '奖励你在下雨天,还愿意送我回家',
    
    '科罗拉多的风雪啊',
    
    '喜马拉雅的骤雨啊',
    
    '只要你相信我,闭上眼就能到达',
    
    '开在那牛羊遍野的天涯',
    
    '奖励你走到哪儿,都不会忘记我呀',
    
    '洁白如雪的沙滩啊',
    
    '风平浪静的湖水啊',
    
    '那些真实的幻影啊,是我给你的牵挂',
    
    '开在你心底最深的泥沙',
    
    '奖励你能感受,每个命运的挣扎',
    
    '是谁挥霍的时光啊',
    
    '是谁苦苦的奢望啊',
    
    '这不是一个问题,也不需要你的回答',
]

let el = document.querySelectorAll(".girl, .boy")
console.log(el)
el[0].addEventListener("click",function(e){
    console.log(e.currentTarget,e.target.className)
    if(e.currentTarget.className == 'girl'){
        document.querySelector('audio').play();
        document.querySelector(".vacant").textContent = 'girl';
        console.log('girl')
        document.querySelector(".tip").style.color = "#000";
        setTimeout(function(){

            document.querySelector('.mask').style.display = "none"
        },2000)
        
    }else if(e.currentTarget.className === 'boy'){
        document.querySelector(".vacant").textContent = 'boy';
        console.log('boy')
    }
});
el[1].addEventListener("click",function(e){
    if(e.currentTarget.className === 'girl'){
        document.querySelector(".vacant").textContent = 'girl';
        console.log('girl')
    }else if(e.currentTarget.className === 'boy'){
        document.querySelector('audio').play();
        
        document.querySelector(".vacant").textContent = 'boy';
        document.querySelector('.people-container').style.backgroundImage="url('./img/newgirl.jpg')"
        console.log('boy')
        document.querySelector(".tip").style.color = "#000";
        setTimeout(function(){

            document.querySelector('.mask').style.display = "none"
        },2000)

    }
})


// 产生随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
        //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
        break;
      default:
        return 0;
        break;
    }
  } 

function createFlower(x,y){
    let newFlower = document.createElement("div");
    newFlower.style.height = "50px";
    newFlower.style.width = "50px";
    newFlower.style.backgroundImage = "url('./img/littleflower.png')";
    newFlower.style.position = "fixed";
    newFlower.style.top = y + 'px';
    newFlower.style.left = x + 'px';
    newFlower.style.backgroundSize="contain";
    document.querySelector('.people-container').appendChild(newFlower)

    let word = document.createElement("p");
    word.style.display = "inline-block";
    word.style.position = "absolute";
    word.style.width = "100px"
    word.style.textAlign = "center"
    word.style.fontSize = "12px"
    word.style.color = "white"
    word.style.top = "100%"
    word.style.left = "50%"
    word.style.transform = "translateX(-50%)  translateY(-50%)"
    word.innerHTML = lyric[randomNum(0, lyric.length) - 1];
    newFlower.appendChild(word);
}
// 点击添加小红花
document.querySelector('.people-container').addEventListener('click',function(e){
    let x = e.clientX;
    let y = e.clientY;
    console.log(x,y)
    createFlower(x,y)

})

