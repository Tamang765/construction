import Circle from "../Common/Circle";
import { FaPencilRuler, FaPeopleArrows, FaFileSignature } from "react-icons/fa";
import { GoFileSymlinkDirectory } from "react-icons/go";
import CountUp from 'react-countup';
const CounterData = [
  {
    id: "1",
    count: "121",
    Category: "Project Design",
    icon: <FaPencilRuler  className="fs-1"/>
  },
  {
    id: "2",
    count: "101",
    Category: "Happy Clients",
    icon: <FaPeopleArrows  className="fs-1"/>
  },
  {
    id: "3",
    count: "31",
    Category: "Complete Projects",
    icon: <GoFileSymlinkDirectory className="fs-1"/>
  },
];

const Counter = () => {
  return (
    <div className="counter container-fluid">
      <div className="count-clients container d-flex  justify-content-evenly align-items-center h-100">
        {CounterData.map((item) => (
          <div className="d-flex team-icon text-center flex-column align-items-center gap-3 ">
            <Circle item={item.icon}/>
           <h3> <CountUp end={item.count} duration={3} /></h3>
            <span>{item.Category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
