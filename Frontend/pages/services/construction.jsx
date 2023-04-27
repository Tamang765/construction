import Common from "@/Component/Services/Common";
import { ServiceData } from "@/Component/Services/Services";

const construction = () => {
  const filteredId = ServiceData.filter((items) => items.id === "2");
  return (
    <>{filteredId.map((item) => (
      < Common link={item.link} filteredId={filteredId} id={ item.id} />
    ))
}
    </>
  );
};

export default construction;
