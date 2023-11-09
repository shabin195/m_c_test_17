import React from 'react';
import { getData } from '../services';
import Header from "../user/header.jsx"
import Footer from "../user/footer.jsx"
import { useEffect, useState } from 'react';
function Profile() {
    const [getCountries, setCountries] = useState([]);
    useEffect(() => {
        getData().then((data) => {
            console.log(".....abc.....",data)
            setCountries(data)
        })
    }, []);
    return (
        <div className="country-wrpr">
            <Header />
            <div className="inine-outer">
                {getCountries.map((obj, i) => (
                    <div className="inlinediv">
                        <div className="inlineimg">
                            <img src={obj.flag} alt="" />
                        </div>
                        <div className="inlinetext">
                            <h3 className="inline-h3">{obj.name}</h3>
                            <p className="inline-p">{obj.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default Profile;