import { Link } from "react-router-dom"
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg blue-bg">
            <div className="container-fluid">
                <Link className="navbar-brand yellow-font" to={'/home'}>BobBuster</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link yellow-font" aria-current="page" to={"/home"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link yellow-font" to={"/home/about"}>About Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}