import Head from "next/head";

const Meta = ({ title, keywords, description,image }) => {
    return (
        <Head>
            <title>Портфоліо Альона Статкевич</title>
            <meta charSet="utf-8" />
            <meta name="rating" content="Портфоліо Альона Статкевич" />
            <meta name="author" content="Портфоліо Альона Статкевич" />
            <meta name="expires" content="Портфоліо Альона Статкевич" />
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
    image:"https://img.freepik.com/free-photo/people-festival_1160-736.jpg?w=2000&t=st=1677709606~exp=1677710206~hmac=5aa5f71cd3b7eab915bc3ae30f1f0f8f6ce87927731622b734fa528a2c39aa2a"
};

export default Meta;
