//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import {useRouter} from "next/router";
import {Fragment} from "react";

function NewMeetupPage() {
  const router = useRouter();
  // const addMeetupHandler = async (enteredMeetupData) => {
  async function addMeetupHandler(enteredMeetupData) {
    console.log("entered meetup data", enteredMeetupData);

    // const response = await fetch("/api/new-meetup", {
    //   method: "POST",
    //   body: JSON.stringify(enteredMeetupData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const dataResult = await response.json();
    // console.log("dataResult", dataResult);
    // router.push("/");

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("response data", data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetupPage;
