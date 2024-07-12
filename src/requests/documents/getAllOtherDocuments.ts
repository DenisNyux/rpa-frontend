async function getAllOtherDocuments() {
    const myHeaders = new Headers();
  
    myHeaders.append(
      "Authorization",
      `bearer ${process.env.API_TOKEN}`
    );
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      next: { revalidate: 60 }
    };
  
    const response = await fetch(`${process.env.API_URL}/api/catdocuments?populate[relatedDocs][populate][0]=mainDocument, documentAttachments&filters[id][$eq]=6`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  
    return response
  }
  
  export default getAllOtherDocuments;
  