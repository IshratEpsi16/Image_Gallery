import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage1 from '/images/image-11.jpeg';
import myImage2 from '/images/image-3.webp';
import myImage3 from '/images/image-2.webp';
import myImage4 from '/images/image-7.webp';
import myImage5 from '/images/image-5.webp';
import myImage6 from '/images/image-9.webp';
import myImage7 from '/images/image-10.jpeg';
import myImage8 from '/images/image-4.webp';
import myImage9 from '/images/image-8.webp';
import myImage10 from '/images/image-1.webp';
import myImage11 from '/images/image-3.webp';
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (


        <div class="p-3 mb-2 bg-body-secondary">
            hello

            <div class="row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage1} class="img" alt="..."></img>
                    </div>
                </div>

                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage2} class="img" alt="..."></img>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage3} class="img" alt="..."></img>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage4} class="img" alt="..."></img>
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage5} class="img" alt="..."></img>
                    </div>
                </div>

                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage6} class="img" alt="..."></img>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage7} class="img" alt="..."></img>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage8} class="img" alt="..."></img>
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage9} class="img" alt="..."></img>
                    </div>
                </div>

                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage10} class="img" alt="..."></img>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={myImage11} class="img" alt="..."></img>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card ">
                        <div class='element '>

                            <svg class='logo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg>
                            <p class='text-center'><b>Add Images</b></p>
                        </div>

                    </div>
                </div>


            </div>


        </div>


    )
}

export default App
