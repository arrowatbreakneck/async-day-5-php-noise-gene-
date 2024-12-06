document.querySelector("button").addEventListener("click",(event)=>{
event.preventDefault();
result();
});

var red = document.getElementById("validationDefault01").addEventListener("change",(ele)=>{
ele.target.value;

});




async function result(){
try{
    var green = document.getElementById("validationDefault02").value ; 
var blue = document.getElementById("validationDefault03").value ;
var nt = document.getElementById("validationDefault04").value ;
var ts = document.getElementById("validationDefault05").value ;
var br = document.getElementById("validationDefault06").value ;
var md = document.getElementById("bright").value;
    var data = await fetch(`https://php-noise.com/noise.php?r=${red}&g=${green}&b=${blue}&tiles=${nt}&tileSize=${ts}&borderWidth=${br}&mode=mode&json`);
    var accData = data.url;
    var aftData = accData?.uri;
    // console.log(red);
    
    Showimg(aftData);
//   console.log(red,green,blue,nt,ts,br,md);


}catch(error){
    console.log(error);
}
};

function Showimg(Data5){

    var disply = document.getElementById("disbox");
    var imagine = document.createElement("div");
    imagine.innerHTML = `<img src="${Data5}" alt="This is a php noise generated image" srcset="">`;
    disply.append(imagine);
    // console.log(accData);
    
}