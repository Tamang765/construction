import Common from "@/Component/Services/Common";
import { ServiceData } from "@/Component/Services/Services";

const design = () => {
  const filteredId = ServiceData.filter((items) => items.id === "3");
  return (
    <>{filteredId.map((item) => (
      < Common link={item.link} filteredId={filteredId} id={ item.id} />
    ))
}
    </>
  );
};

export default design;
