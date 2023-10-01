import React, {useState, useEffect} from "react";
import Header from "./Header";
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaQrcode } from "react-icons/fa";
import QRCodeSample from '../assets/qrsample.png';
import QRCode from 'react-qr-code';
import axios from "axios";

export default function Beranda() {

  const [Expose, setExpose] = useState('');
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`https://localhost:7001/api/Register/Getbyid/${location.state.idcheck}`)
      .then((result) => {
        setExpose(result.data.expose)
        // console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(Expose)
  // console.log(location.state);
  return (
    <>
    <div className='beranda'>
        <Header/>
        <div className="container">
            <div className="qrdiv text-center">
                {location.state.id && (
                    <QRCode
                        title="QR Pengunjung"
                        value={location.state.id}
                    />
                )}
                
                {/* <img src={QRCodeSample} style={{width: 250}}></img> */}
                <h4 className="mt-3">UID : {location.state.id}</h4>
            </div>
            <div className="TextData text-center">
                <h2>Nama : {location.state.nama}</h2>
            </div>
            <div className="station">
                <div className="row">
                    <div className="col-3 text-center">
                        {(function() {
                          if (Expose === true) {
                            return <Button variant="success" id="btnStationAct">1</Button>;
                          } else {
                            return <Button variant="secondary" id="btnStation">1</Button>;
                          }
                        })()}
                    </div>
                    <div className="col-3 text-center">
                        {(function() {
                          if (location.state.force === 1) {
                            return <Button variant="success" id="btnStationAct">2</Button>;
                          } else {
                            return <Button variant="secondary" id="btnStation">2</Button>;
                          }
                        })()}
                    </div>
                    <div className="col-3 text-center">
                        {(function() {
                          if (location.state.bts === 1) {
                            return <Button variant="success" id="btnStationAct">3</Button>;
                          } else {
                            return <Button variant="secondary" id="btnStation">3</Button>;
                          }
                        })()}
                    </div>
                    <div className="col-3 text-center">
                        {(function() {
                          if (location.state.utc === 1) {
                            return <Button variant="success" id="btnStationAct">4</Button>;
                          } else {
                            return <Button variant="secondary" id="btnStation">4</Button>;
                          }
                        })()}
                    </div>
                </div>
            </div>
        </div>
    <div>&nbsp;</div>
    </div>

    </>
  );
}
