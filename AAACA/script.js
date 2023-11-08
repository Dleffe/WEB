let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    changeImage();
}, 4000);

function changeImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}





