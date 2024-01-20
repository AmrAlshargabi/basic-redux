import AppNavbar from "../components/AppNavbar";
import '../style/header.css'
import { Counter } from "./Counter";
// import ibexWhitelogo from "../assets/images/ibex-white-logo.png"
// import ibexColorfullogo from "../assets/images/ibex-colorful-logo.svg"

export default function HomePage() {
    return (
        <>
            <AppNavbar />
            HomePage
            <Counter />
        </>
    )
}