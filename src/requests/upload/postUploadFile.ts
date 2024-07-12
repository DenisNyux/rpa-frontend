async function postUploadFile(fileInput: HTMLInputElement) {
  if (!fileInput.files) return;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `bearer ${process.env.API_TOKEN}`);

  const formdata = new FormData();

  formdata.append("files", fileInput.files[0], fileInput.files[0].name);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  };

  fetch("https://console.rpa-russia.ru/api/upload", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}

export default postUploadFile;