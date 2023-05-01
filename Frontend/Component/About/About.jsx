import Card from "../Common/Card";
import LineName from "../Common/lineName";
import { BsCheck2, BsTrophy } from "react-icons/bs";
const AboutData = [
  {
    id: "1",
    heading: "About",
    detail: "Marvelous was formed in 2022 by a group of professionals to provide a full range of engineering, planning, and surveying services to the public for both residential and commercial purposes. Marvelous has quickly become one of the most well-known engineering consultancy in Nepal. Our goal is to deliver high-quality engineering services that meet the needs of clients while upholding the highest standards of quality, safety, and innovation. Marvelous Construction has the expertise and technology to bring your building project to life. A wide range of services are now covered by us, including engineering design and construction, project planning and preparation, property valuation, interior design, technical assistance and training, consulting services, and all facets of project implementation.",
    list: ["Efficient and Reliable Service", "High-Quality Materials", "Cost-Effective Solutions"],
    img:"/media/clients.jpg",
    cardDetail: "Our technicality make a different construction building.",
    path:"/aboutmarvel"
}]
const About = () => {
  return (
    <div className="about container-fluid mt-4 ">
      {
        AboutData.map((item,index) => (
          <Card heading={item.heading} key={index} id={item.id} detail={item.detail.slice(0, 300)} image={item.img} cardDetail={item.cardDetail} path={ item.path}>
            {item.list.map((listitem,index) => (
            <li key={index}>{ listitem}</li> 
            ))}
            </Card>
      ))}
    </div>
  );
};

export default About;
