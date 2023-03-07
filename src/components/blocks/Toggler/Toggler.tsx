import React from 'react';
import css from "../../../App.module.css";


const Toggler = () => {
    return (
        <div className={css.toggler}>
            {/*<button onClick={()=>setToggle(!toggle)} disabled={!toggle} className={css.toggleButton}><img src={eye} alt="eye"/> Runtime</button>*/}
            {/*<button onClick={()=>setToggle(!toggle)} disabled={toggle} className={css.toggleButton}><img src={selector} alt="selector"/>Constructor</button>*/}
        </div>
    );
};

export default Toggler;