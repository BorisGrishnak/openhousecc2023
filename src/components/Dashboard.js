import React, {useState, useEffect} from "react";
import { Card, Button, Table } from "react-bootstrap";
import {ExportExcel} from "./ExportToExcel";
import HeaderDesktop from "./HeaderDesktop";
import axios from "axios";  
import dateFormat, { masks } from "dateformat";
import { isToday } from "date-fns";

export default function Dashboard() {

  const [data, setData] = React.useState([])
  const [xlsxdata, setXlsxData] = React.useState([])
  const fileName = "Rekap Pengunjung Openhouse Command Center 2023";

  const current = new Date();
  const now = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('https://openhousewebapi.azurewebsites.net/api/Admin').then(postData => {

     // reshaping the array
     const customHeadings = postData.data.map(item=>({
       "idPengunjung": item.idPengunjung,
       "Nama": item.nama,
       "NoHP": item.noHP,
       "Jabatan": item.jabatan,
       "Kantor": item.kantor,
       "Expose": item.expose,
       "Force": item.force,
       "BTS": item.bts,
       "UTC": item.utCall,
       "CreatedAt": item.createdAt,
     }))
     const xlsxData = postData.data.map(item=>({
       "idPengunjung": item.idPengunjung,
       "Nama": item.nama,
       "NoHP": item.noHP,
       "Jabatan": item.jabatan,
       "Kantor": item.kantor
     }))
     setData(customHeadings) 
     setXlsxData(xlsxData) 
      // console.log(data.CreatedAt);
     })
    }
    fetchData()
  }, [])  

  const countData = data.length;

  const doneDataRaw = data.filter( data =>
    data.Expose === true &&
    data.Force === true &&
    data.BTS === true &&
    data.UTC === true 
  );

  const doneData = doneDataRaw.length;

  const wee = data.map((png) => png.CreatedAt == isToday );

  const woo = current.getFullYear();

  // console.log(wee.length);

  return (
    <>
    <div className='dashboard'>
        <HeaderDesktop/>
        <div className="container">
            <div className="text-center mt-5">
              <div className="row">
                <div className="col-4">
                  <Card>
                    <Card.Body>
                      <h6>Jumlah Pengunjung</h6>
                      <h4>{countData}</h4>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-4">
                  <Card>
                    <Card.Body>
                      <h6>Jumlah Pengunjung Hari Ini</h6>
                      <h4>{wee.length}</h4>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-4">
                  <Card>
                    <Card.Body>
                      <h6>Jumlah Pengunjung Selesai</h6>
                      <h4>{doneData}</h4>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <Card>
                <Card.Body>
                  <div className="row">
                    <div className="col-10">
                      <h3 style={{marginInlineStart: 100}}>Data Pengunjung</h3>
                    </div>
                    <div className="col-2">
                      {/* <div className="me-5"> */}
                        <ExportExcel apiData={xlsxdata} fileName={fileName}></ExportExcel>
                      {/* </div> */}
                    </div>
                  </div>
                  <table className="table table-bordered mt-5">
                    <thead>
                      <tr>
                        <th scope="col" style={{backgroundColor: "#FDCD04"}}>No.</th>
                        <th style={{backgroundColor: "#FDCD04"}}>Nama</th>
                        <th style={{backgroundColor: "#FDCD04"}}>No.HP</th>
                        <th style={{backgroundColor: "#FDCD04"}}>Site/Cabang/Divisi</th>
                        <th style={{backgroundColor: "#FDCD04"}}>Jabatan</th>
                        <th style={{backgroundColor: "#FDCD04"}}>Expose</th>
                        <th style={{backgroundColor: "#FDCD04"}}>Force</th>
                        <th style={{backgroundColor: "#FDCD04"}}>BTS</th>
                        <th style={{backgroundColor: "#FDCD04"}}>UT Call</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((png, index) => (
                        <tr key={index}>
                          <td><h6>{index + 1}.</h6></td>
                          <td>{png.Nama}</td>
                          <td>{png.NoHP}</td>
                          <td>{png.Kantor}</td>
                          <td>{png.Jabatan}</td>
                          <td style={{backgroundColor: "#FDCD04"}}></td>
                          <td>
                            {(function() {
                              if (png.Expose === true) {
                                return <Button variant="success" id="btnStationAct"></Button>;
                              } else {
                                return <Button variant="secondary" id="btnStation"></Button>;
                              }
                            })()}
                          </td>
                          <td>
                            {(function() {
                              if (png.Force === true) {
                                return <Button variant="success" id="btnStationAct"></Button>;
                              } else {
                                return <Button variant="secondary" id="btnStation"></Button>;
                              }
                            })()}
                          </td>
                          <td>
                            {(function() {
                              if (png.BTS === true) {
                                return <Button variant="success" id="btnStationAct"></Button>;
                              } else {
                                return <Button variant="secondary" id="btnStation"></Button>;
                              }
                            })()}
                          </td>
                          <td>
                            {(function() {
                              if (png.UTC === true) {
                                return <Button variant="success" id="btnStationAct"></Button>;
                              } else {
                                return <Button variant="secondary" id="btnStation"></Button>;
                              }
                            })()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </div>
        </div>
    <div>&nbsp;</div>
    </div>

    </>
  );
}
