import { Link } from "@remix-run/react";

export default function NavMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" rel="noreferrer">
                        Home
                    </Link>
                </li>{" "}
                <li>
                    <Link to="/projects" rel="noreferrer">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/about" rel="noreferrer">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/contacts" rel="noreferrer">
                        Contacts
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
