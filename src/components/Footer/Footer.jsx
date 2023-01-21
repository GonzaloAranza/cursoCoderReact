import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon'

import InstagramIcon from '../Icons/InstagramIcon/InstagramIcon'
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer container-fluid mt-5 bg-dark">
                <div className="row">
                    
                </div>
                <div className="row mb-3">
                    <div className="col-12 text-center text-white">
                        <h3 className="footer__texto">Nuestras <b>Redes:</b></h3>
                            <div className="redes__sociales">
                                <a href="https://www.facebook.com" target="_blank"><FacebookIcon /></a>
                                <a href="https://www.instagram.com" target="_blank"> <InstagramIcon /> </a>
                                <a href="https://www.linkedin.com/in/gonzalo-aranzamendi/" target="_blank"> <LinkedinIcon /> </a>
                            </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
