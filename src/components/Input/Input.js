export default function Input({ text }) {
  return (
    <>
      <label className="input__label" htmlFor={text}>
        {text}
      </label>
      <input className="input__field" type="text" name="name" />
    </>
  );
}
