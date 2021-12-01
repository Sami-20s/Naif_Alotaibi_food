import React from "react";

const Footer = () => {
    return (
        <footer className="footer container-px" id="contact">
            <div className="footer__wrapper">
                <div className="locations">
                    <h3>LOCATIONS</h3>
                    <div className="locations__info">
                        <div>
                            <p>678 Some Awesome</p>
                            <p>Brooklyn,NY -112233</p>
                        </div>
                        <div>
                            <p>678 Some Awesome</p>
                            <p>Brooklyn,NY -112233</p>
                        </div>
                    </div>
                </div>
                <div className="hours">
                    <h3>HOURS</h3>
                    <div className="hours__info">
                        <div className>
                            <p>Monday - Thursday</p>
                            <p>08:00am - 11:00pm</p>
                        </div>
                        <div>
                            <p>Monday - Thursday</p>
                            <p>08:00am - 11:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
