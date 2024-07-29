import Head from "next/head";
import imagePath from '../public/assets/images/covers/VERTIGO.jpg'; // или из другого места, где хранится изображение

const Meta = ({ title, keywords, description,image }) => {
    console.log()
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
             image={imagePath.src}
        />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Портфоліо Альона Статкевич",
    keywords: "Портфоліо Альона Статкевич",
    description: "Портфоліо Альона Статкевич",
    image:"http://localhost:3000/assets/images/covers/VERTIGO.jpg"
};

export default Meta;
