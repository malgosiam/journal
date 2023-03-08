export default function Textarea({ text }) {
  return (
    <>
      <label className="textarea-laber" htmlFor="text">
        {text}
      </label>
      <textarea className="textarea" name={text} rows={6} />
    </>
  );
}
