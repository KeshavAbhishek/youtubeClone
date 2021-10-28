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
    document.getElementById('fullScreen').style.display='block';
});

document.getElementById('fullScreen').addEventListener('mousedown',()=>{
    if(document.getElementById('fullScreen').innerText=='Full Screen'){
        document.getElementById('vidCon').style.width='100vw';
        document.getElementById('vidCon').style.height='100vh';
        document.getElementById('mainVideo').style.width='100%';
        document.getElementById('mainVideo').style.height='100%';
        document.getElementById('ytlogoFrame').style.display='none';
        document.getElementById('kindOfController').style.display='none';
        document.getElementById('fullScreen').innerText='Exit Full Screen';
    }
    else if(document.getElementById('fullScreen').innerText=='Exit Full Screen'){
        document.getElementById('ytlogoFrame').style.display='block';
        document.getElementById('kindOfController').style.display='block';
        document.getElementById('fullScreen').innerText='Full Screen';
        document.getElementById('mainVideo').style.width='95vw';
        document.getElementById('mainVideo').style.height='80vh';
    };
});