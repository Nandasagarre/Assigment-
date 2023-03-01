import React from "react";

function Title() {

    return (
        <>
            <div className="title-box">
                <div class="container-fluid text-center">
                    <div class="title">
                        <div><p>Title</p></div>
                        <div>
                            <p>
                                npm run eject
                                Removes this tool and copies build dependencies, configuration files
                                and scripts into the app directory. If you do this, you cant go back!
                            </p>
                        </div>
                        <button className="btn btn-light">Read More</button>
                    </div>
                   
                </div>
                
            </div>
        </>
        )
}

export default Title;