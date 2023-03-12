import Image from "next/image";
import Meta from "../components/Meta";
import Post from "../components/Post";
import Animate from "../components/Animate";
import Heading from "../components/Heading";
import Magazine from "../components/Magazine";
import Pagination from "../components/Pagination";
import { Block } from "../components/Grid";
import Masonry from "react-masonry-css";
import Typewriter from 'typewriter-effect';
// Data
const blog_travel_1 = [
    {
        title: "What is Lorem Ipsum?",
        image: "/assets/images/blog/travel111.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        category: "Lorem Ipsum",
        link: "/",
    },
    {
        title: "What is Lorem Ipsum?",
        image: "/assets/images/blog/travel-1-2.jpg",
        image_width: 600,
        image_height: 900,
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        category: "Lorem Ipsum",
        link: "/",
    },
    {
        title: "What is Lorem Ipsum?",
        image: "/assets/images/blog/travel111.jpg",
        image_width: 600,
        image_height: 700,
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        category: "Lorem Ipsum",
        link: "/",
    },
    {
        title: "What is Lorem Ipsum?",
        image: "/assets/images/blog/travel111.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        category: "Lorem Ipsum",
        link: "/",
    },
    {
        title: "What is Lorem Ipsum?",
        image: "/assets/images/blog/travel111.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        category: "Lorem Ipsum",
        link: "/",
    },
    {
        title: "What is Lorem Ipsum?",
        image: "/assets/images/blog/travel111.jpg",
        image_width: 600,
        image_height: 400,
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        category: "Lorem Ipsum",
        link: "/",
    },
];

// Magazine cover image
import magazineCover from "../public/assets/images/covers/travel-56.jpg";

function Travel() {
    return (
        <>
            <Meta image={magazineCover}/>
            <Magazine>
                <Magazine.Cover image={magazineCover}>
                    <Heading className="absolute left-4 md:left-8 bottom-40 md:bottom-20">
                        <Animate name="fadeIn" delay="1.2s" duration="2s">
                            <Heading.Title>
                                <h1 className="text-white text-5xl font-extrabold leading-tight ">
                                <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
                                </h1>
                            </Heading.Title>
                        </Animate>
                    </Heading>
                    <div className="absolute right-3 md:right-8 bottom-20">
                        <Animate name="fadeIn" delay="1.2s" duration="2s">
                            <Image className="App-logo" src="/assets/images/other/most-popular-yellow.png" width={90} height={90} alt="travel" />
                        </Animate>
                    </div>
                    <Magazine.Footer className="absolute bottom-6 w-100" color="#fff" />
                </Magazine.Cover>
                <Magazine.Content>
                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                        <Heading>
                            <Heading.Title>
                                <h2 className="xl:absolute lg:left-8 xl:-left-32 right-8 text-4xl md:text-5xl font-extrabold  leading-tight text-white">
                                    <span>Lorem Ipsum is simply dummy text  </span>
                                    <span style={{ color: "#d10000" }}>of the printing and typesetting industry.</span>
                                </h2>
                            </Heading.Title>
                        </Heading>
                    </Block>
                    <Block className="pb-24 px-4 md:px-8">
                        <Masonry breakpointCols={{ default: 2, 768: 1 }} className="masonry flex" columnClassName="masonry__item">
                            {blog_travel_1 &&
                                blog_travel_1.length > 0 &&
                                blog_travel_1.slice(0, 6).map((item, index) => (
                                    <div key={index}>
                                        <Animate name="fadeInUpXs" delay={`${index + 3}00ms`} duration="1.8s">
                                            <Post post={item} model={1} max_words={15} image_width={item.image_width} image_height={item.image_height} />
                                        </Animate>
                                    </div>
                                ))}
                        </Masonry>
                        <Pagination>
                            <li>
                                <a href="#">
                                    <span className="current">1</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="next">NEXT</span>
                                </a>
                            </li>
                        </Pagination>
                    </Block>
                    <Block className="px-8 pb-8">
                        <Heading className="text-center">
                            <Heading.Title>
                                <h2 className="text-45 text-2xl md:text-5xl font-extrabold leading-tight mb-8">
                                    <span>Follow us on </span>
                                    <span style={{ color: "#d10000" }}>Instagram</span>
                                    <br></br>
                                    <span>Lorem Ipsum</span>
                                </h2>
                            </Heading.Title>
                            <Heading.Subtitle>
                                <div>
                                    <a href="#" rel="no-follow">
                                        <Image src="/assets/images/icons/instagram.png" alt="Instagram Logo" width={64} height={64} />
                                    </a>
                                </div>
                            </Heading.Subtitle>
                        </Heading>
                    </Block>
                </Magazine.Content>
            </Magazine>
        </>
    );
}

export default Travel;

