import React from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
import { Button } from "react-bootstrap";

export default function Dashboard() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = () =>{
         axios.get('https://localhost:7001/api/Admin').then(postData => {
    
         // reshaping the array
         const customHeadings = postData.data.map(item=>({
           "idPengunjung": item.idPengunjung,
           "Nama": item.nama,
           "NoHP": item.noHP,
           "Kantor": item.kantor,
           "Expose": item.expose,
           "Force": item.force,
           "BTS": item.bts,
           "UTC": item.utc,
         }))
        //  console.log(customHeadings);
          setData(customHeadings) 
         })
        }
        fetchData()
      }, [])

      const columns = [
        {
            name: 'Nama',
            selector: row => row.nama,
        },
        {
            name: 'No.HP',
            selector: row => row.noHP,
        },
        {
            name: 'Kantor',
            selector: row => row.kantor,
        },
    ];

      return(
        <DataTable
            columns={columns}
            data={data.map((png, index) => (
                <tr key={index}>
                  <td><h6>{index + 1}.</h6></td>
                  <td>{png.Nama}</td>
                  <td>{png.NoHP}</td>
                  <td>{png.Kantor}</td>
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
        />
      )
}