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
        title: "Trifecta med spa -  мережа спа в Нью Йорку",
        image: "/assets/images/blog/NewCover.jpg",
        image_width: 600,
        image_height: 900,
        excerpt: "У цьому проекті я брала участь як дизайнер та верстальник, а також займалася заповненням контенту на платформі Contentful. Розробка здійснювалася за допомогою Next.js, що забезпечило створення сучасного, динамічного та ефективного веб-додатку. Мої обов'язки включали розробку естетично привабливого дизайну, реалізацію адаптивної верстки та інтеграцію контенту через Contentful, що дозволило досягти високої якості користувацького досвіду та функціональності сайту.",
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
        title: "PixelCraft - It Компанія в Румунії - місто Ясси",
        image: "/assets/images/blog/it.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Займалася розробкою дизайну",
        category: "Розробка . дизайн",
        link: "https://pixelcraft-media.com/",
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
        title: "Luxtex Постільна білизна від виробника",
        image: "/assets/images/blog/bedline.jpg",
        image_width: 600,
        image_height: 900,
        excerpt: "Я розробила дизайн та здійснила заповнення сайту, а також виступила співрозробником проекту, що використовує технологію Next.js для фронтенду. У якості адмін-панелі було обрано WordPress, що дозволяє зручно управляти контентом. Товари завантажуються з адмін-панелі через API, використовуючи GraphQL-запити, забезпечуючи ефективну та динамічну взаємодію між фронтендом і бекендом. Це рішення поєднує потужність сучасних фреймворків із зручністю класичної CMS, створюючи гнучкий і продуктивний веб-додаток.",
        category: "Розробка . дизайн",
        link: "https://lux-tex.com.ua/",
    },
    {
        title: "Виробник весільних суконь Україна",
        image: "/assets/images/blog/wed.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Дизайн, розробка та наповнення контентом ",
        category: "Розробка . дизайн",
        link: "https://vekawedding.com/ro/wedding-stylist-2/",
    },
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
        title: "Відео креатив ",
        image: "/assets/images/blog/cos.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Відео відзняте мною ",
        category: "Розробка . дизайн",
        link: "https://www.instagram.com/p/CtkKbuxocUt",
    },
  
    {
        title: "Відео креатив ",
        image: "/assets/images/blog/vit.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Відео відзняте мною ",
        category: "Розробка . дизайн",
        link: "https://www.instagram.com/p/CukghEDo8HZ/",
    },
    {
        title: "Відео креатив ",
        image: "/assets/images/blog/b6.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "Відео відзняте мною ",
        category: "Розробка . дизайн",
        link: "https://www.instagram.com/p/CuShcHhImfQ",
    },
   
];

// Magazine cover image
import magazineCover from "../public/assets/images/covers/i.jpg";

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
    strings: ['Привіт ', 'Hello',  'Buna'],
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
                            <Image className="App-logo" src="/assets/images/other/logo.png" width={150} height={150} alt="travel" />
                        </Animate>
                    </div>
                    <Magazine.Footer className="absolute bottom-6 w-100" color="#fff" />
                </Magazine.Cover>
                <Magazine.Content>
                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                        <Heading>
                            <Heading.Title>
                                <h2 className="font-sans xl:absolute lg:left-8 xl:-left-32 right-8 text-4xl md:text-5xl font-extrabold  leading-tight text-white ">
                                    <span>Мене звати Альона Статкевич, і я рада вітати вас на моїй веб-сторінці. </span>
                                    <span style={{ color: "#d10000" }}>Тут ви знайдете мої проекти, досягнення та інформацію про мою професійну діяльність.</span>
                                </h2>
                            </Heading.Title>
                        </Heading>
                    </Block>

                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                        <Heading>
<div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
<p className="font-bold text-4xl text-white"> 2008 </p>
<p className="text-slate-200 text-lg">Навчалася в коледжі Імені Нечуя-Левицького за спеціальністю художник-дизайнер</p>
    </div>
    <div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>

<p className="font-bold text-4xl text-white"> 2011 </p>
                                    <p className="text-slate-200 text-lg">Навчалася - Київський Національний університет біотехнологій та природних ресурсів за спеціальністю інженер.</p>
    </div>
    <div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>

<p className="font-bold text-4xl text-white"> 2015 </p>
                                    <p className="text-slate-200 text-lg">Розпочала свою професійну діяльність як контент-менеджер. За цей час я займалася:</p>
                                    <ul className="mt-3 text-lg">
                                        <li>- SMM </li>
                                        <li>- Створенням постів і дизайнів</li>
                                        <li>- Створенням рекламних банерів (фото ,відео)</li>
                                        <li>- Фотографуванням та розробкою рекламних креативів</li>
                                        <li>- Відеоанімацією</li>
                                        <li>- Заповненням та зміною дизайнів сайтів</li>
                                        <li>- Запуском рекламних кампаній у Facebook та Google</li>
                                        <li>- SEO</li>
                                        </ul>
    </div>

    <div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>

<p className="font-bold text-4xl text-white"> 2015 </p>
                                    <p className="text-slate-200 text-lg">Розпочала свою професійну діяльність як контент-менеджер. За цей час я займалася:</p>
                                    <ul className="mt-3 text-lg">
                                        <li>- SMM </li>
                                        <li>- Створенням постів і дизайнів</li>
                                        <li>- Створенням рекламних банерів (фото ,відео)</li>
                                        <li>- Фотографуванням та розробкою рекламних креативів</li>
                                        <li>- Відеоанімацією</li>
                                        <li>- Заповненням та зміною дизайнів сайтів</li>
                                        <li>- Запуском рекламних кампаній у Facebook та Google</li>
                                        <li>- SEO</li>
                                        </ul>
    
    
    
                                        <p className="text-slate-200 text-lg">Освоїла такі програми:</p>
<ul className="mt-3 text-lg">
                                        <li>- Adobe Photoshop</li>
                                        <li>- Adobe After Effects</li>
                                        <li>- Adobe Premiere Pro</li>
                                        <li>- DaVinci Resolve </li>
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
                                       <p className="text-slate-200 text-lg">Просування сайтів та SEO</p>   

<ul className="mt-3 text-lg">
<li>- Google Analytics</li>
<li>- Google Keyword Planner</li>
<li>- Google Search Console</li>
<li>- Facebook Pixel</li>
<li>- Ahrefs</li>
<li>- Різні сервіси для перевірки текстів на унікальність</li>
</ul>    

<p className="text-slate-200 text-lg">Дизайн  </p>   

<ul className="mt-3 text-lg">
<li>- Схеми користувацьких інтерфейсів (UI)</li>
<li>- Схеми користувацьких потоків (User Flows)</li>
<li>- Карти сайтів (Sitemaps)</li>
<li>- Прототипування</li>

</ul>  
<p className="text-slate-200 text-lg">Навчилася планувати кожен проект  </p>   

<ul className="mt-3 text-lg">
<li>- Trello </li>


</ul>  

                                        <p className="text-slate-200 text-lg">Також набула досвіду з кодування:</p> 
                                        <ul className="mt-3 text-lg">
                                        <li>- редактор кода Visual Studio Code</li>
                                        <li>- HTML, HTML5, CSS, SASS, SCSS</li>
                                        <li>- Основи JavaScript</li>
                                        <li>- фреймворки - Bootstrap 5 \ Bulma \ Tailwind CSS</li>
                                       </ul>   
                                      
    
    
    
    
    
    
    
    
    
    
    
    </div>                     
    <div className="about-contact-box info-box shadow-box mt-6">
    <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
    <p className="font-bold text-4xl text-white"> 2016 </p> 

<p className="text-slate-200 text-lg">Почала створювати сайти на платформах Contao та WordPress.</p>
        
        
        
        </div>                               
        <div className="about-contact-box info-box shadow-box mt-6">  


        <p className="font-bold text-4xl text-white"> 2018 </p> 
        <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
<p className="text-slate-200 text-lg">Поглибила знання з кодування на JavaScript та React. Почала розробляти особисті блоги для клієнтів на платформах Next.js та Gatsby.js.</p>
<ul className="mt-3 text-lg">
                                        <li>- Next.js</li>
                                        <li>- Gatsby.js</li>
                                        <li>- GraphQL</li>
                                        <li>- Git </li>
                                        <li>- Npm </li>
                                        <li>- Node.js</li>
                                       </ul>  


        </div>
        <div className="about-contact-box info-box shadow-box mt-6">
        <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>  
        <p className="font-bold text-3xl text-white"> Знання мов </p> 
<p className="text-slate-200 text-lg">ВІЛЬНО - Українська , Російська </p>
<p className="text-slate-200 text-lg">В1 - Англійська  </p>
<p className="text-slate-200 text-lg">С1 - Румунська  </p>
        
        </div>                             
        <div className="about-contact-box info-box shadow-box mt-6">  
        <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
        <p className="font-bold text-3xl text-white"> На даний момент - поглиблюю знання з UI/UX дизайну та фотографії </p> 

<p className="text-slate-200 text-lg">Цей шлях дозволив мені стати справжнім професіоналом у сфері контент-менеджменту та веб-розробки, поєднуючи креативний підхід і технічні навички. На даний момент я займаюсь переважно контент-менеджментом, зосереджуючись на створенні високоякісного контенту, управлінні соціальними мережами, розробці стратегій SEO та запуску ефективних рекламних кампаній.</p>
            
             </div>  

             <div className="about-contact-box info-box shadow-box mt-6"> 
             <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/> 
             <p className="font-bold text-3xl text-white"> Відпочинок  </p> 


<p className="text-slate-200 text-lg">Вільний час проводжу зі своєю сім'єю часто подорожую, обожнюю  гори 🏔️ та море 🌊. Гори надають мені можливість насолоджуватися природою, свіжим повітрям та активним відпочинком, як-от піші походи 🚶 та катання на лижах 🎿. Морський відпочинок дарує спокій та релаксацію 😌, дозволяє насолоджуватися сонцем ☀️, плаванням. Такі подорожі заряджають мене енергією ⚡ та натхненням для нових професійних звершень.</p>
                </div>  
                <div className="about-contact-box info-box shadow-box mt-6">  
                <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
                <p className="font-bold text-3xl text-white"> Віра  </p> 
                <p className="text-slate-200 text-lg">Вірю що Ісус є  Господь ✝️</p>  
                     </div>  
                
                      
                        </Heading>
                    </Block>
                    <Block className="pb-24 px-4 md:px-8">
                    <h2 className="text-5xl font-bold mb-6 text-white"> Мої проекти </h2> 
                        <Masonry breakpointCols={{ default: 2, 768: 1 }} className="masonry flex" columnClassName="masonry__item">
                            {blog_travel_1 &&
                                blog_travel_1.length > 0 &&
                                blog_travel_1.slice(0, 12).map((item, index) => (
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
                                    <span>Звісно, це лише частинка мого портфоліо...😌 </span>
                                  
                                 
                                   
                                </h2>
                            </Heading.Title>
                          
                        </Heading>
                    </Block>
                    <Block className="px-8 pb-8">
                 
                        <Heading className="text-center flex justify-center mt-12">
                            <Heading.Title>
                            <div className="button_shine_phone">
  <a href="tel:+380664227756">Зателефонувати мені</a>
</div>
                            </Heading.Title>
                        
                        </Heading>
                        <div className="mt-12 mb-12">
                        <p className="font-bold text-2xl text-white"> Мої контакти! </p>
                       <p><span className="text-white"> email:</span> alonastatkevic@gmail.com</p>
                       <p> <span className="text-white">telephone:</span> +38066-422-77-56</p>
                       <p> <span className="text-white">Viber:</span> +38066-422-77-56</p>
                       <p> <span className="text-white">Telegram:</span> +38066-422-77-56</p>
                        </div>
                    </Block>
                </Magazine.Content>
            </Magazine>
        </>
    );
}

export default Travel;

