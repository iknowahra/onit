import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Get the current pathname

    useEffect(() => {
        // Custom scroll behavior
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling
        });
    }, [pathname]); // Run effect on path changes

    return null; // This component doesn't render anything
};

export default ScrollToTop;