import Head from "next/head";

const Meta = ({ title, keywords, description,image }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="rating" content="Lorem Ipsum What is Lorem Ipsum?" />
            <meta name="author" content="Lorem Ipsum What is Lorem Ipsum?" />
            <meta name="expires" content="Lorem Ipsum What is Lorem Ipsum?" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="language" content="english" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta name="distribution" content="global" />
            <meta
          property="og:image"
          content={image}
        />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Lorem Ipsum What is Lorem Ipsum?",
    keywords: "Lorem Ipsum What is Lorem Ipsum?",
    description: "Lorem Ipsum What is Lorem Ipsum?",
    image: "../../public/assets/images/covers/travel-56.jpg"
};

export default Meta;
