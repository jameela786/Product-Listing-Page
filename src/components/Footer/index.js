import './index.css'
import { IoLogoInstagram,IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
  console.log('inside Footer')
  return (
    <>

      <div className="footer_container">
        <div className='card1_container'>
            <div>
                <p className='befirst_para'>BE THE FIRST TO KNOW</p>
                <p className='signup_text'>Sign up for updates from metta muse</p>
                <div className='="signup_input_container'>
                    <input type="text" className='signupText' />
                    <button className='subscribe_btn'>SUBSCRIBE</button>
                </div>

            </div>
            <div>
                <p className='contact_us'>CONTACT US</p>
                <p className='numberemail_details'>+44 221 133 5360</p>
                <p className='numberemail_details'>customercare@mettamuse.com</p>
                <p className='currency'>Currency</p>
                <div className='country_container'>

                    <img alt="images" src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737612582/United_States_of_America_US_ohnyhh.png" className='country_img'/>
                    <p className="usd">USD</p>
                </div>
                <p className='transaction_details'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <hr />
        <div className='card2_container'>
            <div>
                <p className='metta_muse'>mettā muse</p>
                <p className='inside_text'>About Us</p>
                <p className='inside_text'>Stories</p>
                <p className='inside_text'>Artisans</p>
                <p className='inside_text'>Boutiques</p>
                <p className='inside_text'>Contact Us</p>
                <p className='inside_text'>EU Compliances Docs</p>
            </div>

            <div>
                <p className='quick_links'>Quick Links</p>
                <p className='inside_text'>Orders & Shipping</p>
                <p className='inside_text'>Join/Login as a Seller</p>
                <p className='inside_text'>Payment & Pricing</p>
                <p className='inside_text'>Return & Refunds</p>
                <p className='inside_text'>FAQs</p>
                <p className='inside_text'>Privacy Policy</p>
                <p className='inside_text'>Terms & Conditions</p>
            </div>

            <div>
                <p className='follow_us'>Follow Us</p>
                <div className='follow_icons'>
                <IoLogoInstagram size={24}/>
                <IoLogoLinkedin size={24}/>
                </div>
                <p className="follow_cards">mettā muse <span className='span_card'>Accepts</span></p>
                <div className='cards_container'>
                    <img alt="images" src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737611182/Group_136188_udqegm.png" className='cards_img'/>
                    <img alt="images" src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737611212/Group_136190_iox10q.png" className='cards_img'/>
                    <img alt="images" src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737611233/Group_136192_dhyvoo.png" className='cards_img'/>
                    <img alt="images" src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737611252/Group_136193_usynna.png" className='cards_img'/>
                    <img alt="images" src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737611268/Group_136194_t2uigf.png" className='cards_img'/>
                    <img alt="images" src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737611283/Group_136195_glir1f.png" className='cards_img'/>
                </div>
            </div>
        </div>
        <div className='footer_copyright'>
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
        </div>
        
      </div>
    </>
  )
}
export default Footer
