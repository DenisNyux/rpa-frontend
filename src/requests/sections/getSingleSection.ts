async function getSection(sectionSlug: string) {
    const myHeaders = new Headers();
  
    myHeaders.append(
      "Authorization",
      `bearer ${process.env.API_TOKEN}`
    );
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      next: { revalidate: 0 }
    };
  
    const response = await fetch(`${process.env.API_URL}/api/sections?filters[sectionSlug][$eq]=${sectionSlug}&populate[0]=sectionLogo&populate[1]=sectionDocuments&populate[2]=sectionTabs&populate[3]=sectionMembers.avatar&populate[4]=sectionHead.avatar`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  
    return response
  }
  
  export default getSection;
  