function red(){
    document.getElementById('IPid').style.color ='red';
}
function bold(){
    document.getElementById('IPid').style.fontWeight='bold';
}
function italic(){
    document.getElementById('IPid').style.fontStyle='italic';
}
function left(){
    document.getElementById('IPid').style.textAlign='Left';
}
function center(){
    document.getElementById('IPid').style.textAlign='center';
}
function right(){
    document.getElementById('IPid').style.textAlign='right';
}
function uppercase(){
    document.getElementById('IPid').style.textTransform ='Uppercase';
}
function lowercase(){
    document.getElementById('IPid').style.textTransform='Lowercase';
}
function capitalize(){
    document.getElementById('IPid').style.textTransform='capitalize';
}
function clear(){
    document.getElementById('TPid').value="";
    document.getElementById('IPid').style.fontWeight='normal';
    document.getElementById('IPid').style.fontStyle='normal';
    document.getElementById('IPid').style.textAlign='left';
    document.getElementById('IPid').style.textTransform ='none';
}