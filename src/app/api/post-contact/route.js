import axios from "axios";

export async function POST(request) {
  try {
    const { firstName, email, message } = await request.json();
    const result = await axios.post(
      `https://blogs-xxj7aq26ia-uc.a.run.app/contacts`,
      {
        firstName,
        email,
        message,
      }
    );

    const response = await result.data;
    return Response.json(response);
  } catch (err) {
    console.log(err, "error");
  }
}
