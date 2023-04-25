import LineName from "../Common/lineName";
import Slider from "react-slick";
import { MdLocationCity } from "react-icons/md";

import { FaIndustry } from "react-icons/fa";
import { Title } from "../Common/Card";

  export const Category = [{
    id: 1,
    name: "Interior"
  },
  {
    id: 2,
    name: "Exterior"
    },
    {
      id: 3,
      name: "Construction"
    },
    
]
export const BlogData = [
    {
        id: "1",
        title:"Interior Blog",
    img: ["/media/news/1.jpg", "/media/news/2.jpg"],
    heading: "hello House Colors Combinations",
    description:"Minim qui amet est proident velit occaecat pariatur aute sint voluptate aute occaecat. Fugiat in sunt tempor labore esse tempor incididunt eiusmod. Culpa ex eiusmod ullamco veniam labore dolore laboris Lorem aliqua. Aliqua in sint nulla ex ullamco aute dolor do nisi veniam excepteur veniam dolor. Deserunt elit labore aliquip cillum ipsum cupidatat deserunt esse fugiat irure. Tempor cupidatat dolore sit sint incididunt ipsum dolore dolor ad nisi aliquip occaecat magna. Excepteur do enim veniam et irure. Ea ex velit laborum veniam eiusmod proident velit aliqua ad sit enim dolor sit laborum.Sit exercitation amet labore officia fugiat occaecat. Consectetur et eu nostrud enim ad ipsum aute quis est exercitation consectetur aute consequat. Ut id sunt consectetur laborum ut fugiat sunt excepteur sint quis irure. Non ut irure qui deserunt velit ad exercitation laboris commodo do consectetur. Cillum esse elit laboris officia ea fugiat id id voluptate ipsum nisi. Enim velit officia eu elit magna cupidatat duis aute magna aute. Exercitation nisi dolor ad et aliqua.",
    category: "Interior",
    date: "2023-04-19",
    author: "Hero",
    authorImg:"/media/team/comment2.jpg"
    },
    {
      id: "2",
      title:"Construction Blog",
        img: ["/media/news/1.jpg","/media/news/2.jpg"],
      heading: "Construction House Colors Combinations",
      description:"Minim qui amet est proident velit occaecat pariatur aute sint voluptate aute occaecat. Fugiat in sunt tempor labore esse tempor incididunt eiusmod. Quis id consequat eu eu consectetur consequat do laboris. Proident et est ex dolor. Proident excepteur magna ex irure ad culpa. Officia aute eiusmod magna deserunt fugiat ea reprehenderit cupidatat reprehenderit duis Lorem mollit. Cillum reprehenderit culpa non aliqua Lorem est nostrud esse excepteur sunt nulla proident exercitation voluptate. Aute eu laboris sunt non velit Lorem velit cillum incididunt nulla.",
      category: "Construction",
      icon:<MdLocationCity />,
      date:"2023-04-15",
      author: "zero",
      authorImg:"/media/team/comment3.jpg"
    },
    {
      id: "3",
      title:"Interior Blog",
        img: ["/media/news/3.jpg","/media/news/1.jpg"],
      heading: "Interior House Colors Combinations",
        description:"Minim qui amet est proident velit occaecat pariatur aute sint voluptate aute occaecat. Fugiat in sunt tempor labore esse tempor incididunt eiusmod. Ut velit magna mollit quis nisi duis anim est exercitation anim laborum eiusmod eu anim. Aliqua ipsum elit Lorem veniam deserunt anim excepteur consequat. Dolore dolore cillum adipisicing dolore ullamco magna anim Lorem cillum quis est ullamco reprehenderit. Proident reprehenderit in veniam nostrud enim sit mollit est minim ex ea. Commodo sit cupidatat et fugiat mollit aliqua proident nisi enim qui.",
      category: "Interior",
      date: "2023-04-19",
      icon: "hj",
      author:"Surz Don",
      authorImg:"/media/team/comment2.jpg"
    },
    {
      id: "4",
      title:"Exterior Blog",
        img: ["/media/news/6.jpg","/media/news/3.jpg"],
      heading: "Exterior House Colors Combinations",
      description:"Minim qui amet est proident velit occaecat pariatur aute sint voluptate aute occaecat. Fugiat in sunt tempor labore esse tempor incididunt eiusmod. Esse ullamco ut aliquip dolor sit nisi do voluptate culpa deserunt nostrud aute. Voluptate quis magna amet labore. Officia aliqua pariatur eu adipisicing nulla enim proident occaecat adipisicing est sit. Laborum nisi fugiat quis aute occaecat sit ut officia. Aliquip officia cillum reprehenderit esse ea minim eiusmod amet officia et eiusmod aute cillum. ",
      category: "Exterior",
      icon:<FaIndustry/>,
      date: "2022-04-20",
      author: "Hero",
      authorImg:"/media/team/comment2.jpg"
    }, {
      id: "5",
      title:"Interior Blog",
        img: ["/media/news/4.jpg","/media/news/3.jpg"],
      heading: "Interior House Colors Combinations",
      description:"Minim qui amet est proident velit occaecat pariatur aute sint voluptate aute occaecat. Fugiat in sunt tempor labore esse tempor incididunt eiusmod. Dolore excepteur consectetur enim non cillum mollit labore esse magna mollit. Esse veniam voluptate est dolor mollit qui esse. Proident et eiusmod tempor velit excepteur est.",
      category: "Interior",
      date: "2022-04-19",
      author: "Hero",
      authorImg:"/media/team/comment2.jpg"
    }
    , {
      id: "6",
      title:"Interior Blog",
        img: ["/media/news/5.jpg","/media/news/3.jpg"],
      heading: "Interior House Colors Combinations",
      description:"Minim qui amet est proident velit occaecat pariatur aute sint voluptate aute occaecat. Fugiat in sunt tempor labore esse tempor incididunt eiusmod. Reprehenderit minim cillum nostrud amet esse occaecat. Aute duis et proident proident velit cupidatat irure ex minim reprehenderit qui minim. Officia commodo officia cupidatat nisi laborum culpa voluptate culpa consectetur fugiat duis sunt deserunt adipisicing.",
      category: "Interior",
      date: "2022-04-17",
      author: "Hero",
      authorImg:"/media/team/comment3.jpg"
    }

]
const Blog = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
      return (
        <div className="blogs container-fluid">
          <div className="container" style={{paddingTop:"8rem"}}>
            <LineName />
            <h2 className="fw-bold py-2">
              Our <Title title="Blogs"/>
            </h2>
            <Slider {...settings}>
              {BlogData.map((item) => (
                  <div className="card border-0 position-relative mt-4 text-center" key={item.id} >
                  <div className="img-holder">  
                  <img src={item.img[0]} width={390} height={450} />
                      </div>
                  <div className="blogname d-flex flex-column align-items-center position-absolute end-0" style={{width:"85%", left:"28px",bottom:"-3rem"}}>
                      <h4>{item.heading}</h4>
                          <hr style={{width:"100%"}}/>
                          <div className="btn-group d-flex gap-5 align-items-center">
                              <span className="category-name">{item.category}</span>
                              <div className="btn"> <strong>Read More</strong> </div>
                          </div>
                  </div>
      </div>
              ))}
            </Slider>
          </div>
        </div>
      );
}

export default Blog