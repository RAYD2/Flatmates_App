import "../ComponentStyles/sideDetail.css";

export default function SideDetails({ data }) {
  return (
    <>
      <div className="mapSuggestions">{data && <h1>Key Details:</h1>}</div>
    </>
  );
}
