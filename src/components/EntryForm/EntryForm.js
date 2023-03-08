import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          <h2>New Entry</h2>
        </legend>
        <Input text="Motto" />
        <Textarea text="Notes" />
      </fieldset>
      <button>Create</button>
    </form>
  );
}
