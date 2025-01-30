import { Link } from "react-router-dom";

export default function HeroPage() {
    return (
        <>
            <div className="heroContainer bg-blue">
                <h1 className="yellow-font">BobBuster</h1>
                <p>il portale per chi guarda, ma non sa cosa guardare</p>
                <Link to={'/home'}>Entra nel portale</Link>
            </div>
        </>
    )
}