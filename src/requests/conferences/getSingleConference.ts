import { ConferencesType } from "@/types/ConferencesType";

async function getSingleConference(conferenceSlug: string): Promise<ConferencesType> {
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

  const response = await fetch(`${process.env.API_URL}/api/conferences?populate=promoImage,speakers,speakersAtConference,conferenceDocuments&filters[conferenceSlug][$eq]=${conferenceSlug}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));

  return response;
}

export default getSingleConference; 