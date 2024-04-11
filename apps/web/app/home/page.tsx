import { NextPage } from "next";
import ClientCard from "../clients/page";
import BlogPage from "../blogs/page";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const images = [
    {
      src: "/client1.png",
      alt: "Client 1",
    },
    {
      src: "https://source.unsplash.com/random/800x600",
      alt: "Client 2",
    },
    {
      src: "https://source.unsplash.com/random/800x600",
      alt: "Client 3",
    },
    {
      src: "https://source.unsplash.com/random/800x600",
      alt: "Client 4",
    },
    {
      src: "https://source.unsplash.com/random/800x600",
      alt: "Client 5",
    },
    {
      src: "https://source.unsplash.com/random/800x600",
      alt: "Client 6",
    },
    // Add more images as needed
  ];

  const blogData = [
    {
      title: "Digital Privacy Changes Impact On The Advertising",
      date: "15 Nov, 2024",
      comments: 12,
      content: "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      author: {
        name: "Admin",
        profileImageUrl: "https://via.placeholder.com/40x40"
      }
    }
  ]

  return (
    <div>
   
    
    </div>
  );
};

export default Page;
