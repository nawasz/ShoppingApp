import Image from 'next/image';
import Frames34 from '../../public/navbar/Frame 34.png';
import  LogoImg  from '../../public/navbar/Logo.png';
import Search from '../../public/navbar/search.svg'
import './Navbar.styles.css';
import Heart from '../../public/navbar/heart.svg';
import ShoppingBag from '../../public/navbar/shoppingBag.svg';
import Profile from '../../public/navbar/profile.svg';
import Language from '../../public/navbar/Language.svg';
const Navbar = () =>(

  
    <div className="nav-container">

        <div className="grey-strip">
          <div className='grey-strip-container'>
              <Image
                src={Frames34}
                alt="Frame34"
              />
              <Image
                src={Frames34}
                alt="Frame34"
              />
              <Image
                src={Frames34}
                alt="Frame34"
              />
           </div>
        </div>
        <div className="Header-container">
            <div className="header-level-one">
                  <Image src={LogoImg} alt='logo'style={{height:'36px',width:'36px'}}/>
                  <h2 className='title'>LOGO</h2>
                  <div className="icons-tab">
                   <Image src={Search} alt="Icon" width={24} height={24} />   
                  <Image src={Heart} alt="Icon" width={24} height={24} />
                  <Image src={ShoppingBag} alt="Icon" width={24} height={24} />
                  <Image src={Profile} alt="Icon" width={24} height={24} />
                  <Image src={Language} alt="Icon" width={24} height={24} />
                  </div>
                  
            </div>
            <div className="header-level-two">
                    <h3>SHOP</h3>
                    <h3>SKILLS</h3>
                    <h3>STORIES</h3>
                    <h3>ABOUT</h3>
                    <h3>CONTACT US</h3>
            </div>
        </div>

    </div>
)


export default Navbar;


