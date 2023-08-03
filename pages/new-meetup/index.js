//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const onAddMeetupHandler = (data) => {
    console.log("entered meetup data", data);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}
export default NewMeetupPage;
