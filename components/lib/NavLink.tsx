import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
    href: string;
    exact?: boolean;
}

const NavLink: React.FC<Props> = ({ href, exact, children, ...props }) => {
    const { pathname } = useRouter();
    const isActive = pathname == href

    return (
        <>
            <Link href={href}>
                <a className={isActive ? "text-black" : "text-[#9398B0]"} href={href}>{children}</a>
            </Link>
        </>
    );
};

export default NavLink;
