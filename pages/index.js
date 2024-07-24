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
        title: "Сайт дизайнера  Claudio Ungureanu Румунія ",
        image: "/assets/images/blog/ung.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "В цьому проекті я розробила дизайн в програмі figma (може не коректно відображаися ца залежить від платформи figma)",
        category: "Розробка . дизайн",
        link: "https://www.figma.com/proto/K8g08ebSao9HiRd5xRFr5Y/Wireframing-in-Figma?node-id=106-439&t=hK4nd8eCiaQAvgPd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=106%3A439",
    },
    {
        title: "Trifecta med spa -  мережа спа в Нью Йорку",
        image: "/assets/images/blog/NewCover.jpg",
        image_width: 600,
        image_height: 900,
        excerpt: "В цьому проекті я приймала участь як дизайнер, верстальник - також заповнювала контентом на платформі Contentfull(Розроблено на Next.js)",
        category: "Розробка . дизайн",
        link: "https://trifectamedspanyc.com/",
    },
    {
        title: "ORL клініка  в Молдові",
        image: "/assets/images/blog/orl.jpg",
        image_width: 600,
        image_height: 700,
        excerpt: "Приймала участь як дизайнер та наповнювала контентом",
        category: "Розробка . дизайн",
        link: "https://orl.com.vekawedding.com/",
    },
    {
        title: "Відео креатив",
        image: "/assets/images/blog/med.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Створено в  Adobe Photoshop та Adobe After Effects ",
        category: "Розробка . дизайн",
        link: "https://www.instagram.com/p/CE4vKtJFaP9/",
    },
    {
        title: "Виробник весільних суконь Україна",
        image: "/assets/images/blog/wedding.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Дизайн, розробка та наповнення контентом ",
        category: "Розробка . дизайн",
        link: "https://vekawedding.com/ro/wedding-stylist-2/",
    },
   
];

// Magazine cover image
import magazineCover from "../public/assets/images/covers/mi.jpg";

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
    strings: ['Привіт ', 'це моє',  'портфоліо'],
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
                                    <span>Моя професійна  </span>
                                    <span style={{ color: "#d10000" }}>діяльність</span>
                                </h2>
                            </Heading.Title>
                        </Heading>
                    </Block>

                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                        <Heading>
                        <p className="font-bold text-2xl text-white"> 2008 </p>
                        <p className="text-slate-200 text-lg">Навчалася в коледжі Імені Нечуя-Левицького за спеціальністю художник-дизайнер</p>
                            <p className="font-bold text-2xl text-white"> 2011 </p>
                                    <p className="text-slate-200 text-lg">Навчалася - Київський Національний університет біотехнологій та природних ресурсів за спеціальністю інженер.</p>
                                    <p className="font-bold text-2xl text-white"> 2015 </p>
                                    <p className="text-slate-200 text-lg">Розпочала свою професійну діяльність як контент-менеджер. За цей час я займалася:</p>
                                    <ul className="mt-3 text-lg">
                                        <li>- SMM та SEO</li>
                                        <li>- Створенням постів і дизайнів</li>
                                        <li>- Створенням рекламних банерів (фото ,відео)</li>
                                        <li>- Фотографуванням та розробкою рекламних креативів</li>
                                        <li>- Відеоанімацією</li>
                                        <li>- Заповненням та зміною дизайнів сайтів</li>
                                        <li>- Запуском рекламних кампаній у Facebook та Google SEO</li>
                                        <li>- SEO</li>
                                        </ul>
<p className="text-slate-200 text-lg">Освоїла такі програми:</p>
<ul className="mt-3 text-lg">
                                        <li>- Adobe Photoshop</li>
                                        <li>- Adobe After Effects</li>
                                        <li>- Adobe Premiere Pro</li>
                                        <li>- Google Web Designer</li>
                                        <li>- Figma</li>
                                         
                                        </ul>
                                        <p className="text-slate-200 text-lg">Працювала з адмінпанелями:</p>   

                                        <ul className="mt-3 text-lg">
                                        <li>- WordPress</li>
                                        <li>- Joomla</li>
                                        <li>- PrestaShop</li>
                                        <li>- Contentful</li>
                                       </ul>               
                                        <p className="text-slate-200 text-lg">Також набула досвіду з кодування:</p> 
                                        <ul className="mt-3 text-lg">
                                        <li>- HTML, HTML5, CSS, SASS, SCSS</li>
                                        <li>- Основи JavaScript</li>
                                       </ul>   
                                       <p className="font-bold text-2xl text-white"> 2016 </p> 

                                       <p className="text-slate-200 text-lg">Почала створювати сайти на платформах Contao та WordPress.</p>

                                       <p className="font-bold text-2xl text-white"> 2018 </p> 

<p className="text-slate-200 text-lg">Поглибила знання з кодування на JavaScript та React. Почала розробляти особисті блоги для клієнтів на платформах Next.js та Gatsby.js.</p>
<ul className="mt-3 text-lg">
                                        <li>- Next.js</li>
                                        <li>- Gatsby.js</li>
                                        <li>- Git </li>
                                        <li>- Npm </li>
                                        <li>- Node.js</li>
                                       </ul>  

<p className="font-bold text-3xl text-white"> Знання мов </p> 
<p className="text-slate-200 text-lg">ВІЛЬНО - Українська , Російська </p>
<p className="text-slate-200 text-lg">В1 - Англійська  </p>
<p className="text-slate-200 text-lg">С1 - Румунська  </p>
<p className="font-bold text-3xl text-white"> На даний момент </p> 

<p className="text-slate-200 text-lg">Цей шлях дозволив мені стати справжнім професіоналом у сфері контент-менеджменту та веб-розробки, поєднуючи креативний підхід і технічні навички. На даний момент я займаюсь переважно контент-менеджментом, зосереджуючись на створенні високоякісного контенту, управлінні соціальними мережами, розробці стратегій SEO та запуску ефективних рекламних кампаній.</p>




                        </Heading>
                    </Block>
                    <Block className="pb-24 px-4 md:px-8">
                    <h2 className="text-5xl font-bold mb-6 text-white"> Мої проекти </h2> 
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
                      
                    </Block>
                    <Block className="px-8 pb-8">
                        <Heading className="text-center">
                            <Heading.Title>
                                <h2 className="text-45 text-2xl md:text-5xl font-extrabold leading-tight mb-8">
                                    <span>Звісно, це не все моє портфоліо.) </span>
                                  
                                 
                                   
                                </h2>
                            </Heading.Title>
                          
                        </Heading>
                    </Block>
                </Magazine.Content>
            </Magazine>
        </>
    );
}

export default Travel;

