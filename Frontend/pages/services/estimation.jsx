import Common from "@/Component/Services/Common";
import { ServiceData } from "@/Component/Services/Services";

const estimation = () => {
  const filteredId = ServiceData.filter((items) => items.id === "4");
  return (
    <>
      {filteredId.map((item) => (
        <Common link={item.link} filteredId={filteredId} id={item.id} />
      ))}
    </>
  );
};
export default estimation;
