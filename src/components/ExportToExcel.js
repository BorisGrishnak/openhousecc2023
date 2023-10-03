import React from "react";
import * as FileSaver from "file-saver";
import { Button, Tooltip } from "react-bootstrap";
import * as XLSX from "xlsx";

export const ExportExcel = ({ apiData, fileName }) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
  
    const exportToCSV = (apiData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(apiData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    };
  
    return (
      <Button variant="success" style={{width: 100, height: 40}} onClick={(e) => exportToCSV(apiData, fileName)}>Print</Button>
    );
  };
