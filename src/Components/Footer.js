import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    const author="chaithra";
    return(
        <footer>
            <p>&copy;{2023}{author}{year}.All rights resrved.</p>
            <p>Thanks for visiting my website!</p>
        </footer>
    );
}

export default Footer