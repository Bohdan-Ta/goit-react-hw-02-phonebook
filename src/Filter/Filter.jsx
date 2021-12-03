export default function Filter({ value, onFilter }) {
  return (
    <>
      <label>
        Find contact by name:
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={value}
          onChange={onFilter}
        ></input>
      </label>
    </>
  );
}
