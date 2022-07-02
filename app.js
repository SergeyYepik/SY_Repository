function full_nav(){
    document.getElementsByClassName('sidenav')[0].style.width = '100%'
    document.getElementsByClassName('sidenav')[0].style.paddinTop = '200px'
    document.getElementsByClassName('sidenav')[0].style.overflowY = 'scroll'

    document.getElementsByClassName('whiteownerName')[0].style.visibility = 'visible'
    document.getElementsByClassName('whiteownerName')[0].style.top = '270px'
    document.getElementsByClassName('contacts')[0].style.top = '300px'
    document.getElementsByClassName('education')[0].style.top = '550px'
    document.getElementsByClassName('personal')[0].style.top = '660px'

  


}

function full_main(){
    document.getElementsByClassName('sidenav')[0].style.width = '0px'
    document.getElementsByClassName('sidenav')[0].style.height = '0px'

    document.getElementsByClassName('sidenav')[0].style.position = 'relative'
    document.getElementsByClassName('main')[0].style.margin = '0px'
    document.getElementsByClassName('main')[0].style.top = '0px'
    document.getElementsByClassName('main')[0].style.position = 'relative'
}




