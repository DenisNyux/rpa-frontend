async function getSingleEvent(eventSlug: string) {
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

  const response = await fetch(`${process.env.API_URL}/api/meropriyatiyas?populate=eventMedia&filters[eventSlug][$eq]=${eventSlug}`, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));

  return response
}

export default getSingleEvent;
