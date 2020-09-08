import axios from "axios";
import { useContext, useState } from "react";
import ConfigContext from "./ConfigContext";

const Form = ({ pagina, ...props }) => {
  const { config } = useContext(ConfigContext);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formEl = e.target;
    let formData = new FormData(formEl);

    setSubmitting(true);
    axios({
      method: "post",
      url: `${config.apiUrlBase}/sites/${config.siteId}/send_mail`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        // console.log(response);
        if (response.status == 200) {
          alert("Formulário enviado com sucesso!");
          formEl.reset();
        }
      })
      .catch((error) => {
        // console.log(error.response);
        alert(
          `Ops! Ocorreu um erro:\n[${error.response?.status}] ${error.response?.statusText}`
        );
      })
      .then(() => {
        setSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <input type="hidden" name="form[pagina]" value={pagina} />
      {props.children(submitting)}
    </form>
  );
};

export default Form;
