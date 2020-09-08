const SubmitButton = ({ submitting }) => (
  <button type="submit" disabled={submitting}>
    {submitting ? "Enviando..." : "Enviar"}
  </button>
);
export default SubmitButton;
