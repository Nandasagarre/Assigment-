import React from 'react';
import Data from '../data.js';

function Items() {
    //console.log("here", Data);
    return (

        <>
            <div className="main-holder">
                <div className="text-center">
                    <div className="row">
                        {Data.map((item) => (

                            <div className="card box lg-3 m-1" key={item.ID}>
                                <img className="card-img-top" src={item.ImageUrl} alt="Add Image" />
                                <div className="card-body">
                                    <div className="card-title">{item.Name}</div>
                                    <div className="cared-text">{item.ShortDesc}</div>
                                </div>
                                <div className="me-0"><button className="btn btn-light">View</button></div>
                            </div>
                           
                        ))}


                    </div>
                </div>
            </div>
            
           
            
        </>
        )
}

export default Items;