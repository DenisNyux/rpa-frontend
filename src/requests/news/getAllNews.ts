async function getAllNews() {
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

  const response = await fetch(`${process.env.API_URL}/api/news?populate=rubrick, newsImage`, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));

  return response
}

export default getAllNews;
