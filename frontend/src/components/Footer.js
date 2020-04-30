import React, { Component } from 'react';
import Python from '../resources/python.png';
import Scikit from '../resources/scikit.png';
import Tensorflow from '../resources/tensorflow.png';
import Medium from '../resources/medium.png';
import LinkedIn from '../resources/linkedin.png';
import Github from '../resources/github.png';
import File from '../resources/svg/file-icon.svg';
import Mail from '../resources/svg/mail-icon.svg'
import pdf from '../resources/Resume.pdf';

export default class Footer extends Component {
    render() {
        return (
            <div className="custom-black min-h-full mt-20 fade-in-no-delay">
                <div className="flex justify-center w-full">
                    <div className="bound:mx-0 mt-5 flex">
                        <a href="https://medium.com/@sorozco0612" className="w-10 h-10 bound:mx-5 mx-2">
                            <img src={Medium} />
                        </a>
                        <a href="https://github.com/FezTheImmigrant" className="w-16 h-10 bound:mx-5 mx-2 transform -translate-y-2">
                            <img src={Github} />
                        </a>
                        <a href="https://www.linkedin.com/in/sergio-orozco-51b057159/" className="w-10 h-10 bound:mx-5 mx-2">
                            <img src={LinkedIn} />
                        </a>
                        <a className="bound:mx-5 mx-2 w-10 h-8" href={pdf}>
                            <img className="w-full h-full" src={File} />
                        </a>
                        <a href="/contact" className="bound:mx-5 mx-2 w-10 h-8 mt-1">
                            <img className="w-full h-full" src={Mail} />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className="flex mt-5">
                        <a href="https://www.python.org" className="logo-size mx-5 opacity-75">
                            <img src={Python} />
                        </a>
                        <a href="https://scikit-learn.org/stable/" className="scikit-logo-size mx-5 opacity-75">
                            <img src={Scikit} />
                        </a>
                        <a href="https://www.tensorflow.org/" className="logo-size mx-5 opacity-75">
                            <img src={Tensorflow} />
                        </a>
                    </div>
                </div>
                <div className="width-full flex justify-center text-white text-l mt-5 sm:pb-3">
                    {' \u00a9 2020 Sergio Orozco'}
                </div>
                
            </div>
        )
    }
}
