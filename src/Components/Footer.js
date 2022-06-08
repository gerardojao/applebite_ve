import { Link } from "react-scroll"

const Footer = () => {

    return (

        <div className="footer">
            <div className="rrss">
                <a title="Instagram" href="https://www.instagram.com/applebite_ve/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>

                <a title="Whatsapp" href="https://api.whatsapp.com/send?phone=+584160507141" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                <a title="Twitter" href="https://twitter.com/gerardojao" target="_blank" rel="noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a>


            </div>
            <div className="copyright">
                Created by <a href="https://gerardojao.github.io/gerardojao" target="_blank" rel="noreferrer">Gerardo Arrieta</a> | <span className="far fa-copyright"> 2022 All rights reserved.</span>
            </div>

        </div>

    );
};

export default Footer;