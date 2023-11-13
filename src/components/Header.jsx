import React, { useEffect, useState } from 'react';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarPadding = scrollPosition > 100 ? 'py-1' : 'py-3';

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            const targetPosition = section.offsetTop;
            const duration = 1000;

            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;

            let start = null;

            const smoothScroll = (timestamp) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);

                window.scrollTo(0, startPosition + distance * ease(progress));

                if (elapsed < duration) {
                    requestAnimationFrame(smoothScroll);
                }
            };

            // Check if the section is not the main section
            if (sectionId !== 'main') {
                section.style.marginTop = '100px';
            }

            const ease = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

            requestAnimationFrame(smoothScroll);

            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '90px';
                }
            }, 10000);
            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '80px';
                }
            }, 18000);
            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '60px';
                }
            }, 26000);
            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '40px';
                }
            }, 34000);
            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '20px';
                }
            }, 42000);
            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '0px';
                }
            }, 50000);
        }
    };

    const handleClick = (event, section) => {
        event.preventDefault();

        scrollToSection(section);

        const links = document.querySelectorAll('.menu a, .men a');
        links.forEach(link => {
            link.classList.remove('active');
        });

        if (section === 'main') {
            const mainIcon = document.querySelector('.navbar-end svg');
            if (mainIcon) {
                mainIcon.parentNode.classList.add('active');
            }
        } else {
            event.target.classList.add('active');
        }
    };

    return (
        <div className={`flex justify-between transition bg-base-200 fixed w-screen md:w-11/12 mx-auto z-50 ${navbarPadding}`} >
            <div className="navbar-start md:flex md:flex-1">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        <li><a href='#' onClick={(event) => handleClick(event, 'about')}>About Us</a></li>
                        <li><a href='#' onClick={(event) => handleClick(event, 'product')}>Products</a></li>
                        <li><a href='#' onClick={(event) => handleClick(event, 'order')}>Order</a></li>
                        <li><a href='#' onClick={(event) => handleClick(event, 'review')}>Reviews</a></li>
                    </ul>
                </div>

                {/* <a href='#' onClick={() => scrollToSection('main')} className="btn btn-ghost btn-sm normal-case text-xl">XYZ Corp.</a> */}
                <a href='#' className=" btn-sm normal-case font-semibold text-xl">XYZ Corp.</a>
            </div>
            <div className="navbar-end flex flex-2 items-center">
                <ul className="men hidden lg:flex font-semibold" >
                    <li><a className="btn btn-ghost btn-sm normal-case" href='#' onClick={(event) => handleClick(event, 'main')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg></a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'about')}>About Us</a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'product')}>Products</a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'order')}>Order</a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'review')}>Reviews</a></li>
                </ul>
                <a className="btn btn-outline btn-sm text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600 me-4 md:me-2 ms-1">Login</a>
            </div>
        </div>
    );
};

export default Header;
