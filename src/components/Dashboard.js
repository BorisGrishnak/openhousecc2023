import React, {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import {ExportExcel} from "./ExportToExcel";
import HeaderDesktop from "./HeaderDesktop";
import axios from "axios";  

export default function Dashboard() {

  const [data, setData] = React.useState([])
  const fileName = "Rekap Pengunjung Openhouse Command Center 2023";

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('https://localhost:7001/api/Admin').then(postData => {

     // reshaping the array
     const customHeadings = postData.data.map(item=>({
       "idPengunjung": item.idPengunjung,
       "Nama": item.nama,
       "NoHP": item.noHP,
       "Kantor": item.kantor,
     }))
    //  console.log(customHeadings);
      setData(customHeadings) 
     })
    }
    fetchData()
  }, [])

  const countData = data.length;
  
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
                      <h6>{countData}</h6>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-4">
                  <Card>
                    <Card.Body>
                      <h6>Jumlah Pengunjung Selesai</h6>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-4">
                  <Card>
                    <Card.Body>
                      <h6>Jumlah Pengunjung Hari Ini</h6>
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
                        <ExportExcel apiData={data} fileName={fileName}></ExportExcel>
                      {/* </div> */}
                    </div>
                  </div>
                  <table className="table table-bordered mt-5">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th>Nama</th>
                        <th>No.HP</th>
                        <th>Site/Cabang/Divisi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((png) => (
                        <tr key={png.idPengunjung}>
                          <td><h6>1.</h6></td>
                          <td>{png.Nama}</td>
                          <td>{png.NoHP}</td>
                          <td>{png.Kantor}</td>
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
