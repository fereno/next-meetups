import {Fragment} from "react";
//import {MongoClient} from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import NewMeetupPage from "./new-meetup";
import {useEffect} from "react";
import {useState} from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "a first meetup",
    image:
      "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=",
    address: "some address,123456 city",
    description: "first description about food",
  },
  {
    id: "m2",
    title: "a second meetup",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2ZhbGwtdGlueS1ob3VzZS1vcmlnLTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=",
    address: "some address,123456 city",
    description: "second description about food",
  },
  {
    id: "m3",
    title: "a third meetup",
    image: "https://www.imago-images.com/bild/st/0121897380/m.jpg",
    address: "some address,123456 city",
    description: "third description about food",
  },
];

function HomePage(props) {
  const [meetupList, setMeetupList] = useState([]);

  useEffect(() => {
    setMeetupList(DUMMY_MEETUPS);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>React meetup</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>{" "}
      <MeetupList meetups={meetupList} />
    </Fragment>
  );
}

// export async function getStaticProps() {
//   ////fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
//}
// // fetch data from an API
// const client = await MongoClient.connect(
//   "mongodb+srv://fereno:OEvhh2dP7xyYfe57@cluster0.1joq2d3.mongodb.net/meetups?retryWrites=true&w=majority"
// );
// const db = client.db();

// const meetupsCollection = db.collection("meetups");

// const meetups = await meetupsCollection.find().toArray();

// client.close();

// return {
//   props: {
//     meetups: meetups.map((meetup) => ({
//       title: meetup.title,
//       address: meetup.address,
//       image: meetup.image,
//       id: meetup._id.toString(),
//     })),
//   },
//   revalidate: 1,
// };

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
