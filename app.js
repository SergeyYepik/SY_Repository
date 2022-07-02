function full_nav(){
    document.getElementsByClassName('sidenav')[0].style.width = '350px'
    document.getElementsByClassName('main')[0].style.marginleft = '350px'
}

function full_main(){
    document.getElementsByClassName('sidenav')[0].style.width = '0px'
    document.getElementsByClassName('sidenav')[0].style.height = '0px'

    document.getElementsByClassName('sidenav')[0].style.position = 'relative'
    document.getElementsByClassName('main')[0].style.margin = '0px'
    document.getElementsByClassName('main')[0].style.top = '0px'
    document.getElementsByClassName('main')[0].style.position = 'relative'
}




