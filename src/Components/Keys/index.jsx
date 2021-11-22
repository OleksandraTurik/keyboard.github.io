import React, { useEffect } from "react";
import { persistPresetss } from "../redux/action/addPreset.action";
import { connect } from "react-redux";
import { addButton } from "../redux/action/addPreset.action";

const Keys = ({ id, text, color, buttons, selected, addButton }) => {
    useEffect(() => {
        persistPresetss();
      });
    
    const handleButtonClick = e => {
        const buttonId = e.target.id;
        e.target.parentElement.style = 'box-shadow:1px 1px 10px '+color+'; color:'+color;        
        buttons[buttonId] = color 
        addButton(buttons);
    };

    return (
        <div id="keyboard">
            <div id="row1">
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button1">
                    <div className="27 buttonFace " id="button1">Esc</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button3">
                    <div className="112 buttonFace" id="button2">F1</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button4">
                <div className="113 buttonFace" id="button3">F2</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button5">
                <div  className="114 buttonFace" id="button4">F3</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button6">
                <div className="115 buttonFace" id="button5">F4</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button7">
                <div className="116 buttonFace" id="button6">F5</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button8">
                <div className="117 buttonFace" id="button7">F6</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button9">
                <div className="118 buttonFace" id="button8">F7</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button10">
                <div className="119 buttonFace" id="button9">F8</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button11">
                <div className="120 buttonFace" id="button10">F9</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button12">
                <div className="121 buttonFace" id="button11">F10</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button13">
                <div className="122 buttonFace" id="button12">F11</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button14">
                <div className="123 buttonFace" id="button13">F12</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button15">
                <div className="44 buttonFace" id="button14">Print Screen</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button16">
                    <div className="145 buttonFace" id="button15">Scroll Lock</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR1 button17">
                    <div className="19 buttonFace" id="button16">Pause</div>
                </div>
            </div>
            <div className="clear"></div>
            <div id="row2">
                <div onClick={(e) => handleButtonClick(e)}  className="typeR2 button1">
                    <div className="192 buttonFace" id="button17">
                        <p>~</p>
                        <p>`</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)}  className="typeR2 button2">
                    <div className="49 buttonFace" id="button18">
                        <p>!</p>
                        <p>1</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button3">
                    <div className="50 buttonFace" id="button19">
                        <p>@</p>
                        <p>2</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button4">
                <div className="51 buttonFace" id="button20">
                    <p>#</p>
                    <p>3</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button5">
                <div className="52 buttonFace" id="button21">
                    <p>$</p>
                    <p>4</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button6">
                <div className="53 buttonFace"  id="button22">
                    <p>%</p>
                    <p>5</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button7">
                <div className="54 buttonFace" id="button23">
                    <p>^</p>
                    <p>6</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button8">
                <div className="55 buttonFace" id="button24">
                    <p>&</p>
                    <p>7</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button9">
                <div className="56 buttonFace" id="button25">
                    <p>*</p>
                    <p>8</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button10">
                <div className="57 buttonFace" id="button26">
                    <p>(</p>
                    <p>9</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button11">
                <div className="48 buttonFace" id="button27">
                    <p>)</p>
                    <p>0</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button12">
                    <div className="189 buttonFace" id="button28">
                        <p>-</p>
                        <p>-</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button13">
                    <div className="187 buttonFace" id="button29">
                        <p>+</p>
                        <p>=</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2x2 button14">
                <div className="8 buttonFacex2" id="button30">← Backspace</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button15">
                <div className="buttonFace" id="button31">Insert</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button16">
                <div className="buttonFace" id="button32">Home</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button17">
                <div className="buttonFace" id="button33">Page Up</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button18">
                <div className="buttonFace" id="button34">Num Lock</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button19">
                <div className="buttonFace" id="button35">/</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button20">
                <div className="buttonFace" id="button36">*</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR2 button21">
                <div className="buttonFace" id="button37">-</div>
                </div>
            </div>
            <div className="clear"></div>
            <div id="row3">
                <div onClick={(e) => handleButtonClick(e)} className="typeR3x15 button1">
                <div className="buttonFacex15" id="button38">Tab ↹</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button2">
                <div className="buttonFace" id="button39">Q</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button3">
                <div className="buttonFace" id="button40">W</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button4">
                <div className="buttonFace" id="button41">E</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button5">
                <div data-key="r" className="buttonFace" id="button42">R</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button6">
                <div className="buttonFace" id="button43">T</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button7">
                <div className="buttonFace" id="button44">Y</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button8">
                <div className="buttonFace" id="button45">U</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button9">
                <div className="buttonFace" id="button46">I</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button10">
                <div className="buttonFace" id="button47">O</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button11">
                <div className="buttonFace" id="button48">P</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button12">
                <div className="buttonFace" id="button49">
                    <p>  </p>
                    <p>[</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button13">
                <div className="buttonFace" id="button50">
                    <p> </p>
                    <p>]</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3x15 button14">
                <div className="buttonFacex15" id="button51">
                    <p>|</p>
                    <p>/</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button15">
                <div className="buttonFace" id="button52">Delete</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button16">
                <div className="buttonFace" id="button53">End</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button17">
                <div className="buttonFace" id="button54">Page Down</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button18">
                <div className="buttonFace" id="button55">
                    <p>7</p>
                    <p>Home</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button19">
                <div className="buttonFace" id="button56">
                    <p>8</p>
                    <p>↑</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3 button20">
                <div className="buttonFace" id="button57">
                    <p>9</p>
                    <p>Pg Up</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR3Plus button21">
                <div className="buttonFacePlus" id="button58">+</div>
                </div>
            </div>
            <div className="clear"></div>
            <div id="row4">
                <div onClick={(e) => handleButtonClick(e)} className="typeR4x175 button1">
                <div className="buttonFacex175" id="button59">Capslock</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button2">
                <div className="buttonFace" id="button60">A</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button3">
                <div className="buttonFace" id="button61">S</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button4">
                <div className="buttonFace" id="button62">D</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button5">
                <div className="buttonFace" id="button63">F</div>
                <div className="f"></div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button6">
                <div className="buttonFace" id="button64">G</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button7">
                <div className="buttonFace" id="button65">H</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button8">
                <div className="buttonFace" id="button66">J</div>
                <div className="j"></div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button9">
                <div className="buttonFace" id="button67">K</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button10">
                <div className="buttonFace" id="button68">L</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button11">
                    <div className="buttonFace" id="button69">
                        <p>:</p>
                        <p>;</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button12">
                    <div className="buttonFace" id="button70">
                        <p>"</p>
                        <p>'</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="enterKey button13">
                    <div data-key="enter" className="buttonFaceEnter" id="button71">
                        <p>↩ Enter</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button18">
                    <div className="buttonFace" id="button72">
                        <p>4</p>
                        <p>←</p>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button19">
                <div className="buttonFace" id="button73">
                    <p>5</p>
                </div>
                <div className="so5"></div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR4 button20">
                <div className="buttonFace"id="button74">
                    <p>6</p>
                    <p>→</p>
                </div>
                </div>
            </div>
            <div className="clear"></div>
            <div id="row5">
                <div onClick={(e) => handleButtonClick(e)} className="typeR5x225 button1">
                <div className="buttonFacex225" id="button75">⇧ Shift</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button2">
                <div className="buttonFace" id="button76">Z</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button3">
                <div className="buttonFace" id="button77">X</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button4">
                <div className="buttonFace" id="button78">C</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button5">
                <div className="buttonFace" id="button79">V</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button6">
                <div className="buttonFace" id="button80">B</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button7">
                <div className="buttonFace" id="button81">N</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button8">
                <div className="buttonFace" id="button82">M</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button9">
                <div className="buttonFace" id="button83">
                    <p></p>
                        <p>,</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button10">
                <div className="buttonFace" id="button84">
                    <p> </p>
                    <p>.</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button11">
                <div className="buttonFace" id="button85">
                    <p>?</p>
                    <p>/</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5x275 button12">
                <div className="buttonFacex275" id="button86">⇧ Shift</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button14">
                <div className="buttonFace" id="button87">↑</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button18">
                <div className="buttonFace" id="button88">
                    <p>1</p>
                    <p>End</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button19">
                <div className="buttonFace" id="button89">
                    <p>2</p>
                    <p>↓</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5 button20">
                <div className="buttonFace" id="button90">
                    <p>3</p>
                    <p>Pg Dn</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR5Plus button21">
                <div className="buttonFacePlus" id="button91">Enter</div>
                </div>
            </div>
            <div className="clear"></div>
            <div id="row6">
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x125 button1">
                    <div className="buttonFacex125" id="button92">Ctrl</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x125 button2">
                    <div className="buttonFacex125" id="button93">
                        <div className="window1"></div>
                        <div className="window1"></div>                    
                        <div className="window1"></div>
                        <div className="window1"></div>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x125 button3">
                <div className="buttonFacex125" id="button94">Alt</div>
                </div>
                <div className="space button4">
                <div className="buttonFaceSpace" id="button95">
                    <div className="spaceLed"></div>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x125 button9">
                <div className="buttonFacex125" id="button96">Alt</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x125 button10">
                    <div className="buttonFacex125" id="button97">
                        <div className="window2"></div>
                        <div className="window2"></div>
                        <div className="window2"></div>
                        <div className="window2"></div>
                    </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x125 button11">
                <div className="buttonFacex125" id="button98">Fn</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x125 button12">
                <div className="buttonFacex125" id="button99">Ctrl</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6 button13">
                <div className="buttonFace" id="button100">←</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6 button14">
                <div className="buttonFace" id="button101">↓</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6 button15">
                <div className="buttonFace" id="button102">→</div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6x2 button16">
                <div className="buttonFacex2" id="button103">
                    <p>0</p>
                    <p>Ins</p>
                </div>
                </div>
                <div onClick={(e) => handleButtonClick(e)} className="typeR6 button18">
                    <div className="buttonFace" id="button104">
                        <p>.</p>
                        <p>Del</p>
                    </div>
                </div>
            </div>
            <div id="signalLed">
                <div className="led"></div>
                <div className="led"></div>
                <div className="led"></div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    persistPresetss: () => dispatch(persistPresetss()),
    addButton: value => dispatch(addButton(value)),
});

const mapStateToProps = ({ id, text, color, buttons, selected }) => ({
    id,
    text,
    color,
    buttons,
    selected
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Keys);
