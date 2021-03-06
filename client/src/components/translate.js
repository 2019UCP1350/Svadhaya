import React, { Component } from "react";
import Keyboard from 'react-simple-keyboard';
import '../css/keyboard.css';
import {Translator, Translate} from 'react-auto-translate';
import "../css/converter.css";
class translate extends Component {
    state = {
        val: "",
        hindi: "default",
        showAnswer : false,
    }
    handleKeypress = (input) => {
        if ((input === '{shift}' || input === '{lock}') && this.state.hindi === "default")
            this.setState({ hindi: 'shift' })
        else if ((input === '{shift}' || input === '{lock}') && this.state.hindi === 'shift')
            this.setState({ hindi: "default" })
        console.log("presses: ", input);
    }
    handleChange = (val) => {   
        document.getElementById("input").value = val;
        // this.setState({ val })
    }
    getMeaning = () => {
        this.setState({showAnswer:true});
    }
    hindi = {
        shift: [
            "` \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 \u096F \u0966 - \u0943 {bksp}",
            "{tab} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949 \\",
            "{lock} \u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
            "{shift} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {shift}",
            ".com @ {space}"
        ],
        default: [
            "~ \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 \u0903 \u090B {bksp}",
            "{tab} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
            "{lock} \u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
            '{shift} "" \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095F {shift}',
            ".com @ {space}"
        ]
    };
    render() {
        // console.log("aaa", this.state.val);
        return (
            <div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-6 ">
                            <h1 style = {{fontFamily:'FF Tisa Sans'}} className="my-4"><strong>Enter the text in Sanskrit here</strong></h1>
                            <input id = "input" style={{fontSize:'17pt',width:"80%"}}></input>
                            <button
                                style={{
                                    fontSize: '20px',
                                    color: 'white',
                                    padding: "3px",
                                    marginTop: "50px",
                                    width: '100px',
                                    borderColor: '#F76540',
                                    backgroundColor: '#F76540',
                                    margin: '2px',

                                }}
                                onClick={this.getMeaning}>Translate</button>
                                 {this.state.showAnswer ? (
                                
                                <div>
                                <Translator
                                    from='hi'
                                    to='en'
                                    googleApiKey='AIzaSyDRPZqzYEFZbpRsbXW5T73K37kQsN2GiKg'>
                                    <h1><Translate>{document.getElementById("input").value}</Translate></h1>

                                </Translator>
                            
                                    
                                </div>
                            ):null}
                        </div>
                        <div className="col-md-6 " style={{ marginTop: "60px" }} >
                            <div style = {{borderStyle: 'solid', borderColor: '#ff7b59'}}>
                            <Keyboard
                                layout={this.hindi}
                                layoutName={this.state.hindi}
                                onKeyPress={this.handleKeypress}
                                onChange={this.handleChange}
                                newLineOnEnter={true}
                                physicalKeyboardHighlight = {true}
                                physicalKeyboardHighlightBgColor={"#2783e6"}
                                physicalKeyboardHighlightTextColor={"red"}
                                buttonTheme={[
                                    {
                                      class: "hg-red",
                                      buttons: " A औ ऐ आ ई ऊ ओ अ इ ए ऐ"
                                    }
                                  ]}
                               
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default translate;