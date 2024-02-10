
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

    const onDarkMode = ()=>{
        setDark(!dark);
    }


  const OnOpen = ()=>{
    setOpen(!open);
  }

    return (
        <div>
        <div className={`nav ${dark?"addDark":""}`}>
          <div className="container-fluid px-0">
            <div className="row">
                <div className="col-lg-12">
                <div className={`log d-flex bg-success`}>
                 <h1>logo here</h1>
                 <div className="icon">
                     <FiMenu onClick={OnOpen}/>
                     </div>
                </div>
                </div>
            </div>
              <div className="row">
                <div className={`col-lg-2 vh-100 navCol ${open?"addOpen":""}`}>
                 <div className="navBar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <button onClick={onDarkMode}>dark mode</button>
                    </ul>
                 </div>
              </div>
              <div className="col-lg-10 vh-100">
                <h1>dashBoard</h1>
              </div>
              </div>
          </div>
        </div>
        </div>
    );
};

export default Header;