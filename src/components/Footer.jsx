import "../styles/styles.css"

function Footer(){
   
    return <footer>
        <p className="footer-styles">This is the footer,  {new Date().getFullYear()} My React App. All Rights Reserved</p>
    </footer>
}

export default Footer;