document.getElementById('watch').addEventListener('mousedown',()=>{
    var inivideoLink=document.getElementById('linkEntry').value;
    var videoLink=document.getElementById('linkEntry').value;

    videoLink=videoLink.replace('watch?v=','embed/');

    if(inivideoLink==videoLink){
        videoLink=videoLink.split('/');
        videoLink=`https://www.youtube.com/embed/${videoLink[3]}`;
    }

    document.getElementById('mainVideo').style.display='inherit';
    document.getElementById('mainVideo').setAttribute('src',`${videoLink}`);

    document.getElementById('mainVideo').style.width='95vw';
    document.getElementById('mainVideo').style.height='80vh';

    document.getElementById('mainVideo').style.marginBottom='10px';

    document.getElementById('linkEntry').value='';
});