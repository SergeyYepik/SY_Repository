function full_nav(){
    if (document.getElementsByClassName('button_right')[0].innerHTML == '<img src="./images/arrow_forward.svg">')
    {
        document.getElementsByClassName('sidenav')[0].style.width = '100%'
        document.getElementsByClassName('sidenav')[0].style.paddinTop = '200px'
        document.getElementsByClassName('sidenav')[0].style.overflowY = 'scroll'

        document.getElementsByClassName('whiteownerName')[0].style.visibility = 'visible'
        document.getElementsByClassName('whiteownerName')[0].innerHTML = 'Sergiy Yepik'

        document.getElementsByClassName('button_right')[0].innerHTML = '<img src="./images/arrow_back.svg">'
    } else 
        {
            document.getElementsByClassName('sidenav')[0].style.width = '250px'
            document.getElementsByClassName('sidenav')[0].style.paddinTop = '0px'
            document.getElementsByClassName('sidenav')[0].style.overflowY = 'auto'

            document.getElementsByClassName('whiteownerName')[0].style.visibility = 'hidden'
            document.getElementsByClassName('whiteownerName')[0].innerHTML = ''

            document.getElementsByClassName('button_right')[0].innerHTML = '<img src="./images/arrow_forward.svg">'
        }
}

function full_main(){
    if (document.getElementsByClassName('button_left')[0].innerHTML == '<img src="./images/arrow_back.svg">')
    {
        document.getElementsByClassName('sidenav')[0].style.width = '0px'
        document.getElementsByClassName('sidenav')[0].style.height = '0px'  
        document.getElementsByClassName('sidenav')[0].style.position = 'relative'

        document.getElementsByClassName('main')[0].style.left = '0px'
        document.getElementsByClassName('main')[0].style.width = '100%'
        
        document.getElementsByClassName('button_left')[0].innerHTML = '<img src="./images/arrow_forward.svg">'
    } else{
        document.getElementsByClassName('sidenav')[0].style.width = '250px'
        document.getElementsByClassName('sidenav')[0].style.height = '100%'
        document.getElementsByClassName('sidenav')[0].style.position = 'fixed'

        document.getElementsByClassName('main')[0].style.left = '250px'
        document.getElementsByClassName('main')[0].style.width = 'calc(100% - 250px)'

        document.getElementsByClassName('button_left')[0].innerHTML = '<img src="./images/arrow_back.svg">'
    }
}




