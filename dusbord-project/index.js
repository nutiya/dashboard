var sidebar = document.getElementById('sidebar');
var btn = document.getElementById('btn');
var isOpen = false;
btn.addEventListener('click', function(){
    sidebar.style.width = (isOpen? 0:260) + 'px';
})