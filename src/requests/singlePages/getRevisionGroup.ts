async function getRevisionGroup() {
  const myHeaders = new Headers();

  myHeaders.append("Authorization", `bearer ${process.env.API_TOKEN}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 3600 }
  };

  const response = await fetch(
    `${process.env.API_URL}/api/revision-comitee?populate[rpaMembers][populate][0]=avatar`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return response;
}

export default getRevisionGroup;
