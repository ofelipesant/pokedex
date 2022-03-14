export const changeTheme = () => {
    let html = document.querySelector('html')
    let checkbox = document.querySelector('.theme-icon')

    if(checkbox.checked){
        html.setAttribute("data-theme", "dark")
    } else{
        html.setAttribute("data-theme", "light")
    }
}
