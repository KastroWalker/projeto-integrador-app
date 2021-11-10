import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import Input from "../Input";
import { Form } from "./style";
import { useStoreContext } from "../../contexts/storeContext/StoreContext";
import {
  validateDescriptionStore,
  validateNameStore,
} from "../../utils/validations";

const FormStore = () => {
  useStoreContext();
  const { storeContextActions } = useStoreContext();
  const [savingStore, setSavingStore] = useState(false);
  const [values, setValues] = useState({
    name: "",
    description: "",
    openedAt: "",
    closedAt: "",
  });
  const [invalidsFields, setInvalidFields] = useState(new Map());

  const onSubmitForm = (event) => {
    setSavingStore(true);
    event.preventDefault();
    if (validateForm()) {
      storeContextActions.setName(values.name);
      storeContextActions.setDescription(values.description);
      storeContextActions.setOpenedAt(values.openedAt);
      storeContextActions.setClosedAt(values.closedAt);
    }
    setSavingStore(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
    if (invalidsFields.size) {
      validateForm();
    }
  };

  const validateForm = () => {
    const validationName = validateNameStore(values.name);
    const invalidsFieldsMap = new Map();

    !validationName.isValid
      ? invalidsFieldsMap.set("name", validationName.message)
      : null;

    const validationDescription = validateDescriptionStore(values.description);

    !validationDescription.isValid
      ? invalidsFieldsMap.set("description", validationDescription.message)
      : null;

    setInvalidFields(invalidsFieldsMap);

    return invalidsFieldsMap.size === 0;
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        label="Nome"
        onChange={handleChange("name")}
        helperText={invalidsFields.get("name")}
        value={values.name}
      />
      <Input
        label="Descrição"
        onChange={handleChange("description")}
        helperText={invalidsFields.get("description")}
        value={values.description}
      />
      <Input
        label="Horário de Abertura"
        onChange={handleChange("openedAt")}
        helperText={invalidsFields.get("openedAt")}
        value={values.openedAt}
      />
      <Input
        label="Horário de Fechamento"
        onChange={handleChange("closedAt")}
        helperText={invalidsFields.get("closedAt")}
        value={values.closedAt}
      />
      <LoadingButton
        loading={savingStore}
        disabled={invalidsFields.size !== 0}
        variant="contained"
        type="submit"
      >
        Salvar
      </LoadingButton>
    </Form>
  );
};

export default FormStore;
