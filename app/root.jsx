import { cssBundleHref } from "@remix-run/css-bundle";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "@remix-run/react";
import NavMenu from "./components/NavMenu";

export const links = () => [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>

            <body
                style={{
                    fontFamily: "system-ui, sans-serif",
                    lineHeight: "1.4"
                }}>
                <NavMenu />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
