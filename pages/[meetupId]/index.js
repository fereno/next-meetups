import {Fragment} from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <Fragment>
      <Head>
        <title>title meetup</title>
        <meta name="description" content="description meetup" />
      </Head>
      <MeetupDetail
        title={"title meetup detail"}
        image={
          "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4="
        }
        address={"some address,123456 city"}
        description={"some detail description"}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log("meetupId: ", meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "title meetup detail",
        image:
          "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=",
        address: "some address,123456 city",
        description: "some detail description",
      },
    },
  };
}

// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     'mongodb+srv://fereno:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection('meetups');

//   const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

//   client.close();

//   return {
//     fallback: 'blocking',
//     paths: meetups.map((meetup) => ({
//       params: { meetupId: meetup._id.toString() },
//     })),
//   };
// }

// export async function getStaticProps(context) {
//   // fetch data for a single meetup

//   const meetupId = context.params.meetupId;

//   const client = await MongoClient.connect(
//     'mongodb+srv://fereno:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection('meetups');

//   const selectedMeetup = await meetupsCollection.findOne({
//     _id: ObjectId(meetupId),
//   });

//   client.close();

//   return {
//     props: {
//       meetupData: {
//         id: selectedMeetup._id.toString(),
//         title: selectedMeetup.title,
//         address: selectedMeetup.address,
//         image: selectedMeetup.image,
//         description: selectedMeetup.description,
//       },
//     },
//   };
// }

export default MeetupDetails;
