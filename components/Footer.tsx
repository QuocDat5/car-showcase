import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    {/* logo */}
                    <Image
                        src="/logo.svg"
                        alt="Car Hub logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />

                    {/* copyright text */}
                    <p className="text-base text-gray-700">
                        Car Hub 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>

                {/* footer links */}
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div className="footer__link" key={link.title}>
                            {/* titles */}
                            <h3 className="font-bold">{link.title}</h3>

                            {/* links */}
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-gray-500"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
