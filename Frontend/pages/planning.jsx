
import Common from "@/Component/Services/Common";
import { ServiceData } from "@/Component/Services/Services";

const planning = () => {
  const filteredId = ServiceData.filter((items) => items.id === "1");
  return (
    <>{filteredId.map((item) => (
      < Common link={item.link} filteredId={filteredId} id={ item.id} />
    ))
}
    </>
  );
};

export default planning;
