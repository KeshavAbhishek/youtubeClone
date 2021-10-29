document.getElementById('watch').addEventListener('mousedown',()=>{
    var inivideoLink=document.getElementById('linkEntry').value;
    var videoLink=document.getElementById('linkEntry').value;

    videoLink=videoLink.replace('watch?v=','embed/');

    if(inivideoLink==videoLink){
        videoLink=videoLink.split('/');
        videoLink=`https://www.youtube.com/embed/${videoLink[3]}`;
    }

    document.getElementById('mainVideo').style.display='block';
    document.getElementById('mainVideo').setAttribute('src',`${videoLink}`);

    document.getElementById('vidCon').style.width='95vw';
    document.getElementById('vidCon').style.height='80vh';
    
    document.getElementById('mainVideo').style.width='95vw';
    document.getElementById('mainVideo').style.height='80vh';

    document.getElementById('mainVideo').style.marginBottom='10px';

    document.getElementById('linkEntry').value='';
    document.getElementById('fullScreen').style.display='block';
});

document.getElementById('fullScreen').addEventListener('mousedown',()=>{
    document.getElementById('vidCon').style.width='100vw';
    document.getElementById('vidCon').style.height='100vh';
    document.getElementById('mainVideo').style.width='100vw';
    document.getElementById('mainVideo').style.height='100vh';
    document.getElementById('ytlogoFrame').style.display='none';
    document.getElementById('kindOfController').style.display='none';
    document.getElementById('fullScreen').style.display='none';
    document.getElementById('vidCon').style.marginBottom='0';
    document.getElementById('exitFullScreen').style.display='block';
});

document.getElementById('exitFullScreen').addEventListener('mousedown',()=>{
    document.getElementById('ytlogoFrame').style.display='block';
    document.getElementById('kindOfController').style.display='block';
    document.getElementById('fullScreen').style.display='block';
    document.getElementById('vidCon').style.width='95vw';
    document.getElementById('vidCon').style.height='80vh';
    document.getElementById('mainVideo').style.width='95vw';
    document.getElementById('mainVideo').style.height='80vh';
    document.getElementById('vidCon').style.marginBottom='5vh';
    document.getElementById('exitFullScreen').style.display='none';
});