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
    title: "Портфоліо Альона Статкевич",
    keywords: "Портфоліо Альона Статкевич",
    description: "Портфоліо Альона Статкевич",
    image:"https://instagram.fias1-1.fna.fbcdn.net/v/t51.2885-19/449252383_846037527375221_3275430813846302752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fias1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=slXEjeB9ZaIQ7kNvgEyar0S&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCsfF2MDTchskBG8qnj93GdmCmPhXn-15rdIOVOgnwCFA&oe=66A70D13&_nc_sid=8f1549"
};

export default Meta;
