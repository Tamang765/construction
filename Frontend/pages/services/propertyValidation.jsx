import Common from "@/Component/Services/Common";
import { ServiceData } from "@/Component/Services/Services";

const propertyValidation = () => {
  const filteredId = ServiceData.filter((items) => items.id === "5");
  return (
    <>{filteredId.map((item) => (
      < Common link={item.link} filteredId={filteredId} id={ item.id} />
    ))
}
    </>
  );
};

export default propertyValidation;
