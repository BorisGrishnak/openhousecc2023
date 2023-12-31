import React, { Component, useState, useEffect } from "react";
import Header from "./Header";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import axios from "axios";

class BTS extends Component {

    constructor(props) {
        super(props);
      
        // This binding is necessary to make `this` work in the callback.
        this.onNewScanResult = this.onNewScanResult.bind(this);
    }

    handleScan(data){
        this.setState({
          result: data,
        })
      }

    render() {
        
        return (
          <>
          <div className='scanner'>
              <Header/>
              <div className="container">
                  <div className="qrdiv text-center ms-3">
                    <Html5QrcodePlugin 
                      fps={10}
                      qrbox={100}
                      disableFlip={false}
                      qrCodeSuccessCallback={this.onNewScanResult}
                    />

                      {/* <img src={QRCodeSample} style={{width: 250}}></img> */}
                      {/* <h4 className="mt-3">UID : </h4> */}
                  </div>
                  <div className="TextData text-center">
                      {/* <h2>Nama : </h2> */}
                  </div>
              </div>
          <div>&nbsp;</div>
          </div>

          </>
        );
    };
    
    onNewScanResult(decodedText, decodedResult) {
        console.log(decodedResult.decodedText);
        axios.patch(`https://openhousewebapi.azurewebsites.net/api/BTS/${decodedResult.decodedText}`,
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'} }   
            ).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
      }
}

export default BTS
