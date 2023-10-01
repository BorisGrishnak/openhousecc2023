import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7001",
  headers: {
    "Content-type": "application/json"
  }
});


// Titip
// constructor(props) {
//   super(props);

//   // This binding is necessary to make `this` work in the callback.
//   this.onNewScanResult = this.onNewScanResult.bind(this);
// }

// <Html5QrcodePlugin 
//   fps={10}
//   qrbox={100}
//   disableFlip={false}
//   qrCodeSuccessCallback={this.onNewScanResult}
// />

// onNewScanResult(decodedText, decodedResult) {
//   console.log(decodedResult);
// }