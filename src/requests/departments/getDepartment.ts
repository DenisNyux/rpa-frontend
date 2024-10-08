async function getDepartment(departmentSlug: string) {
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
  
    const response = await fetch(`${process.env.API_URL}/api/departments/?populate[headOfDep][populate][0]=avatar&populate[headOfDep][populate][1]=headOfSection&populate[members][populate][0]=avatar&filters[slug][$eq]=${departmentSlug}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  
    return response
  }
  
  export default getDepartment;
  