import React from "react";

const App = () => {

    return (
    <>
        <main>
            <nav>
                <div class="container">
                    <a class="logo" href="#">
                        <span>Zuzanna</span> <span>Gaudnik</span>
                    </a>
                    <ul>
                        <li><a href="#">About me</a></li>
                        <li><a href="#blog">Skills</a></li>
                        <li><a href="#service">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <header>
                <div class="container">
                    <h1>JavaScript developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="" class="btn btn--big">LinkedIn</a>
                    <a href="" class="btn btn--big btn--white">GitHub</a>
                </div>
            </header>
        </main>
     </>
    )
}

export default App;