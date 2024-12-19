var myHeaders = new Headers();
myHeaders.append("ApiKey", "Generate your api key, and paste it here");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "text": "",
  "input_text": ""
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.zerogpt.com/api/detect/detectText", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));