async function getMember(memberSlug: string) {
    const myHeaders = new Headers();
  
    myHeaders.append(
      "Authorization",
      `bearer ${process.env.API_TOKEN}`
    );
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      next: { revalidate: 3600 }
    };
  
    const response = await fetch(`${process.env.API_URL}/api/members?populate=avatar&filters[slug][$eq]=${memberSlug}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  
    return response
  }
  
  export default getMember;
  