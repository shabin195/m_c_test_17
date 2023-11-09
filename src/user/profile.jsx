import React from 'react';
import { getData } from '../services';
import Header from "../user/header.jsx"
import Footer from "../user/footer.jsx"
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Profile() {
    const [getCountries, setCountries] = useState([]);
    useEffect(() => {
        getData().then((data) => {
            console.log(".....abc.....", data)
            setCountries(data)
        })
    }, []);
    return (
        <div className="country-wrpr">
            <div className="container">
                <Header />
                <div className="row fullwidth" >
                    {getCountries.map((item, index) => (
                        <div key={index} className="col-md-6 halfwidth">
                            <div className="inlinediv">
                                <div className="inlineimg">
                                    <img src={item.flag} alt="" />
                                </div>
                                <div className="inlinetext">
                                    <h3 className="inline-h3">{item.name}</h3>
                                    <p className="inline-p">{item.name}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Profile;