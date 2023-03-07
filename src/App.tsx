import React, {useState} from 'react';
import css from './App.module.css'
import {SuperBtn} from "./components/SuperBtn/SuperBtn";
import eye from "./assets/img/eye.svg"
import selector from "./assets/img/selector.svg"

function App() {
    const [toggle, setToggle] = useState(true)

    return (
        <div className={css.app}>
            <div className={css.blocks}>
                <div className={css.block}>
                    <div className={css.tablo}>
                        <div className={css.display}>
                            1000 000
                        </div>
                    </div>
                    <div className={css.tablo}>
                        <SuperBtn>/</SuperBtn>
                        <SuperBtn>x</SuperBtn>
                        <SuperBtn>-</SuperBtn>
                        <SuperBtn>+</SuperBtn>
                    </div>
                    <div className={css.gridTablo}>
                        <SuperBtn>7</SuperBtn>
                        <SuperBtn>8</SuperBtn>
                        <SuperBtn>9</SuperBtn>
                        <SuperBtn>4</SuperBtn>
                        <SuperBtn>5</SuperBtn>
                        <SuperBtn>6</SuperBtn>
                        <SuperBtn>1</SuperBtn>
                        <SuperBtn>2</SuperBtn>
                        <SuperBtn>3</SuperBtn>
                        <SuperBtn style={{gridRow: '4', gridColumnStart: "1", gridColumnEnd: "3"}}>0</SuperBtn>
                        <SuperBtn>,</SuperBtn>
                    </div>
                    <div className={css.tablo}>
                        <SuperBtn xType={"secondary"}>=</SuperBtn>
                    </div>
                </div>
                <div>
                    <div className={css.toggler}>
                        <button onClick={()=>setToggle(!toggle)} disabled={toggle} className={css.toggleButton}><img src={eye} alt="eye"/> Runtime</button>
                        <button onClick={()=>setToggle(!toggle)} disabled={!toggle} className={css.toggleButton}><img src={selector} alt="selector"/>Constructor</button>
                    </div>
                    <div className={css.block}>
                        bbb
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
