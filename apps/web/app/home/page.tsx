import { NextPage } from "next";
import ClientCard from "../components/home/client/Client";
import BlogPage from "../components/home/blogs/blog";
import Faq from "../components/home/faq/Faq";
import AboutPage from "../components/home/about/about";
import Product from "../components/home/how-can-we-help-you/Hero";
import Blog from "../components/home/blogs/blog";
import Testimonials from "../components/home/testimonials/testimonials";
import { title } from "process";
interface Props {
  images: { src: string; alt: string }[];
}
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

  const productData = {
    steelStaging: [
      {
        id: 1,
        productName: "Fabrication 23",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        imageUrl: "/client1.png",
      },
      {
        id: 2,
        productName: "Fabrication 1",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        imageUrl: "/client1.png",
      },
      {
        id: 3,
        productName: "Fabrication 1",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        imageUrl: "/client1.png",
      },
      // Add more steel staging data if needed
    ],
    tabs: [
      {
        tabTitles: "Fabrication",
      },
      {
        tabTitles: "Projects",
      },
      {
        tabTitles: "Steel Staging",
      },
    ],
    heading: "How can we help you?",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",

    fabrication: {
      title: "Fabrication",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      buttonText: "Read More",
      buttonImageUrl: "/client1.png",
      mainImageUrl: "https://source.unsplash.com/random/800x600",
      secondaryImageUrl: "https://source.unsplash.com/random/800x600",
    },
    projectData: [
      {
        nameOfWork: "Name of Work",
        projectName: "Jal Jeevan Mission",
        projectDescription:
          "Jal Jeevan Mission project generally consists of a water collection unit, conveyance system, and units for treatment, purification, and distribution. It is necessary to plan, prepare, and design the entire water supply scheme before constructing the units.",
        image: "https://via.placeholder.com/1253x602",
      },
      {
        nameOfWork: "Name of Work",
        projectName: "Jal Jeevan Mission",
        projectDescription:
          "Jal Jeevan Mission project generally consists of a water collection unit, conveyance system, and units for treatment, purification, and distribution. It is necessary to plan, prepare, and design the entire water supply scheme before constructing the units.",
        image: "https://via.placeholder.com/1253x602",
      },
    ],
  };

  const clientImages = {
    title: "Our Clients",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    images: [
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
    ],
  };

  const aboutData = {
    title: "We make finest architectural design with great passion",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",

    mainImageUrl: "https://source.unsplash.com/random/800x600",
    secondaryImageUrl: "https://source.unsplash.com/random/800x600",
  };

  const faqData = {
    mainImage: "https://source.unsplash.com/random/800x600",
    title: "Frequently Asked Questions",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    faqs: [
      {
        question: "What is the payment method?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
      {
        question: "What is the payment method?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
      {
        question: "What is the payment method?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
      {
        question: "What is the payment method?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
    ],
  };

  const testimonialsData = {
    title: "Testimonials",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    testimonials: [
      {
        name: "John Doe",
        designation: "CEO, Company",
        image: "https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3PaYpfQ-l14Ja~O-UM4TzWrPCei85bOeXIPFncej6dw-ZxbtFhiujRSVEZZN5vGc4pC8qBdOCELpBvs5iAq3yNa7unp-lC3j4wMXtD7VCqywuCwFV-zwzGiEKeIY2eHpCGnMT8lXVY7rTroiMvoqj-f2w5pLRtTr-eE9iDp3T7fT2rhG234d2k9iLsY9PED6aqN8UZLTduangnPRWg3phTghNLHRLDPjOSLaUQjS~UesQDx1PubXvf6nxdn0U0ANdp3Mv3Xtr9AElJkneYA46FUgXrBjYAgQnARWW0DbW0IPQmVsbY8hmSGyWxLG-sq~zZooTFDzX0-gQTwc0ftaQ__",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
      {
        name: "John Doe",
        designation: "CEO, Company",
        image: "https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3PaYpfQ-l14Ja~O-UM4TzWrPCei85bOeXIPFncej6dw-ZxbtFhiujRSVEZZN5vGc4pC8qBdOCELpBvs5iAq3yNa7unp-lC3j4wMXtD7VCqywuCwFV-zwzGiEKeIY2eHpCGnMT8lXVY7rTroiMvoqj-f2w5pLRtTr-eE9iDp3T7fT2rhG234d2k9iLsY9PED6aqN8UZLTduangnPRWg3phTghNLHRLDPjOSLaUQjS~UesQDx1PubXvf6nxdn0U0ANdp3Mv3Xtr9AElJkneYA46FUgXrBjYAgQnARWW0DbW0IPQmVsbY8hmSGyWxLG-sq~zZooTFDzX0-gQTwc0ftaQ__",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
      {
        name: "Prince",
        designation: "CEO, Company",
        image: "https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3PaYpfQ-l14Ja~O-UM4TzWrPCei85bOeXIPFncej6dw-ZxbtFhiujRSVEZZN5vGc4pC8qBdOCELpBvs5iAq3yNa7unp-lC3j4wMXtD7VCqywuCwFV-zwzGiEKeIY2eHpCGnMT8lXVY7rTroiMvoqj-f2w5pLRtTr-eE9iDp3T7fT2rhG234d2k9iLsY9PED6aqN8UZLTduangnPRWg3phTghNLHRLDPjOSLaUQjS~UesQDx1PubXvf6nxdn0U0ANdp3Mv3Xtr9AElJkneYA46FUgXrBjYAgQnARWW0DbW0IPQmVsbY8hmSGyWxLG-sq~zZooTFDzX0-gQTwc0ftaQ__",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
    ],
  };

  const blogData = [
    {
      title: "Digital Privacy Changes Impact On The",
      subTitle: "Advertising",
      date: "15 Nov, 2024",
      comment: "12 Comment",
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      admin: "Admin",
    },
    {
      title: "Digital Privacy Changes Impact On The",
      subTitle: "Advertising",
      date: "15 Nov, 2024",
      comment: "12 Comment",
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      admin: "Admin",
    },
    {
      title: "Digital Privacy Changes Impact On The",
      subTitle: "Advertising",
      date: "15 Nov, 2024",
      comment: "12 Comment",
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      admin: "Admin",
    },
    {
      title: "Digital Privacy Changes Impact On The",
      subTitle: "Advertising",
      date: "15 Nov, 2024",
      comment: "12 Comment",
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      admin: "Admin",
    },
    {
      title: "Digital Privacy Changes Impact On The",
      subTitle: "Advertising",
      date: "15 Nov, 2024",
      comment: "12 Comment",
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      admin: "Admin",
    },
    {
      title: "Digital Privacy Changes Impact On The",
      subTitle: "Advertising",
      date: "15 Nov, 2024",
      comment: "12 Comment",
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      admin: "Admin",
    },
  ];

  return (
    <div>
      <Product {...productData} />
      <ClientCard {...clientImages} />
      <AboutPage {...aboutData} />
      <Faq {...faqData} />
      <Testimonials {...testimonialsData} />
      <Blog blogData={blogData} />
    </div>
  );
};

export default Page;
