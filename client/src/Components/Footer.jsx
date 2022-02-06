import mail from '../images/mail.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import grassoutline from '../images/grassoutline.png';

function Footer(){
    return(
        // div containing footer
        <div className="footer flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-red-200 to-red-600">
            {/* div containing a message*/}
            <div className="footermsg flex flex-col items-center justify-center w-full h-full text-3xl pb-5">
                Stay in touch
            </div>
            <div className="socialoptions flex ">
                <div className="flex l-0">
                    <div className="flex items-center mx-5 w-10">
                        <img className="b-0" src={mail} alt="" />
                    </div>
                    <div className="flex items-center mx-5 w-10">
                        <img className="w-20" src={linkedin} alt="" />
                    </div>
                    <div className="flex items-center mx-5 w-10">
                        <img className="w-20" src={twitter} alt="" />
                    </div>
                </div>
            </div>
            <div className="grassfloor flex mt-10 mr-auto ml-auto">
                <img className="w-20" src={grassoutline} alt="" />
                <img className="w-20" src={grassoutline} alt="" />
                <img className="w-20" src={grassoutline} alt="" />
                
            </div>
        </div>
        )}

export default Footer