import AboutMarvelous from "@/Component/AboutMarvelous/AboutMarvelous"
import AboutLeading from "@/Component/Aboutleading/AboutLeading"
import Client from "@/Component/Client/Client"
import Card from "@/Component/Common/Card"
import Counter from "@/Component/Counter/Counter"
import Team from "@/Component/Team/Team"
import Testimonial from "@/Component/Testimonial/Testimonial"
import Values from "@/Component/Values/Values"

const AboutConstruction=[   {
  id: "1",
  heading: "About",
  detail: "Marvelous was formed in 2022 by a group of professionals to provide a full range of engineering, planning, and surveying services to the public for both residential and commercial purposes. Marvelous has quickly become one of the most well-known engineering consultancy in Nepal. Our goal is to deliver high-quality engineering services that meet the needs of clients while upholding the highest standards of quality, safety, and innovation. Marvelous Construction has the expertise and technology to bring your building project to life. A wide range of services are now covered by us, including engineering design and construction, project planning and preparation, property valuation, interior design, technical assistance and training, consulting services, and all facets of project implementation.",
  list: ["Efficient and Reliable Service", "High-Quality Materials", "Cost-Effective Solutions"],
  img:"/media/clients.jpg",
  cardDetail:"Our technicality make a different construction building."
}]
const aboutmarvel = () => {
  return (
    <><AboutMarvelous heading="Construction Firm" titleBlog="About Norc"/>
     
      {AboutConstruction.map((item) => (
      
        < Card heading={item.heading} detail={item.detail} image={item.img} cardDetail={item.cardDetail}>
         {item.list.map((listitem,index) => (
            <li key={index}>{ listitem}</li> 
            ))}
        </Card>
        ))
      }
      <AboutLeading />
      <Team />
      <Counter />
      <Values />
      <Testimonial />
      <Client/>
    </>
  )
}

export default aboutmarvel