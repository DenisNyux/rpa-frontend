export type PostMemberRequest = {
  name: string;
  slug: string;
  education: string | null;
  contact: string | null;
  workPlace: string | null;
  specialization: string | null;
  degree: string | null;
  therapyType: string | null;
};

async function postMember(body: PostMemberRequest) {
  const myHeaders = new Headers();

  myHeaders.append("Authorization", `bearer ${process.env.API_TOKEN}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 0 },
  };

  const response = await fetch(
    `${process.env.API_URL}/api/members`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return response;
}

export default postMember;
