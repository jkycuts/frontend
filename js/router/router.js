function setRouter() {
    alert(window.location.pathname)
    switch (window.location.pathname) {
        case ("/"):
        case ("/login.html"):
        case ("/register.html"):
        if(localStorage.getItem("token")) {
            window.location.pathname = ("/index.html")
        }
        break;
        case ("/index,html"):
            if(localStorage.getItem("token") == null) {
                window.location.pathname = ("/login.html")
            }
        break;

        default:

        break;
    }
}

export { setRouter };