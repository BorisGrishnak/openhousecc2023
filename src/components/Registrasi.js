import React, { useState } from "react";
import Header from "./Header";
import { Button, Card, Form } from 'react-bootstrap';
import { Link, redirect, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";

export default function Registrasi() {
  
  const navigate = useNavigate();
  const [Nama, setNama] = useState('')
  const [Jabatan, setJabatan] = useState('')
  const [NoHP, setNoHP] = useState('')
  const [Kantor, setKantor] = useState('')
  const IdPengunjung = '';
  const [Pengunjung, setPengunjung] = useState([Nama, NoHP, Kantor])
  const Expose = true;
  const Force = false;
  const BTS = false;
  const UTCall = false;
  const UpdatedAt = '';
  const [Checkpoint, setCheckpoint] = useState([Expose, Force, BTS, UTCall, UpdatedAt])
  const Navigate = useNavigate();
  
  const handleSubmit = e => {
    // Prevent the default submit and page reload
    e.preventDefault()
    try {
    axios.post('https://openhousewebapi.azurewebsites.net/api/Register', {
            IdPengunjung: "",
            Pengunjung: {
              "nama": Nama,
              "jabatan": Jabatan,
              "noHP": NoHP,
              "kantor": Kantor
            },
            Checkpoint: {
            "expose": false,
            "force": false,
            "bts": false, 
            "utCall": false
            },
    })
    
    .then((response) => {
      // Handle response
      // console.log(response); 
      Navigate("/beranda", {
        state:{
          idcheck: response.data.idCheckpoint,
          id : response.data.idPengunjung,
          nama : Nama,
          jabatan : Jabatan,
          kantor : Kantor,
          expose : response.data.expose,
          force : response.data.force      
        }
      });
      // window.location = "/beranda"  
      
    }).catch((err) => {
      Swal.fire({  
        title: 'Failed',  
        type: 'danger',
        text: err.response.data,
      });  
    });
    } catch (error) {
      console.log({error});
    }
    
  }

  function handleChange(event) {{
    setNama(event.target.value);
  }}
  
  return (
    <>
    <div className='registrasi'>
        <Header/>
        <div className="container">
        <Card responsive="sm" className="ms-3 me-3" id="cardreg">
          <Card.Body>
            <h2 className="text-center mt-3" id="ttl">REGISTRASI</h2>
          <Form action="" id="Register" method="post" onSubmit={handleSubmit}>
            <Form.Group md="4" className="mt-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                id="formreg"
                required
                name="Nama"
                value={Nama}
                onChange={e => setNama(e.target.value)}
                type="text"
                placeholder="Nama lengkap"
              />
              <Form.Label className="mt-3">Jabatan</Form.Label>
              <Form.Control
                id="formreg"
                required
                name="Jabatan"
                value={Jabatan}
                onChange={e => setJabatan(e.target.value)}
                type="text"
                placeholder="Jabatan"
              />
              <Form.Label className="mt-3">No. Handphone</Form.Label>
              <Form.Control
                id="formreg"
                required
                name="NoHP"
                value={NoHP}
                onChange={e => setNoHP(e.target.value)}
                type="number"
                placeholder="No. Handphone"
              />
              <Form.Label className="mt-3">Site/Cabang/Divisi/Perusahaan</Form.Label>
              <Form.Control
                id="formreg"
                required
                name="Kantor"
                value={Kantor}
                onChange={e => setKantor(e.target.value)}
                type="text"
                placeholder="Site/Cabang/Divisi/Perusahaan"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <div className="text-center mt-4 mb-2">
              <Button id="btnReg" type="submit">
                  DAFTAR
              </Button>
            </div>
          </Form>
          </Card.Body>
        </Card>
        </div>
    <div>&nbsp;</div>
    </div>

    </>
  );
}
