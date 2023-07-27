import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://wikimediafoundation.org/wp-content/uploads/2022/06/St._Basil_Cathedral.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://wikimediafoundation.org/wp-content/uploads/2023/07/WIPO_Headquarters.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://wikimediafoundation.org/wp-content/uploads/2022/07/Front_view_of_the_WIPO_Conference_Hall_1.jpeg",
    address: "Some address 15, 12345 Some City",
    description: "This is a third meetup!",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://wikimediafoundation.org/wp-content/uploads/2020/09/WIPO_HQ.jpg",
    address: "Some address 23, 34455 Some City",
    description: "This is a fourth meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 3600,
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
