
const Map = () => {
  return (
    <div
    style={{
      textDecoration: "none",
      overflow: "hidden",
      maxWidth: "100%",
      width: "1220px",
      height: "700px",
      paddingBlock: "4rem",
    }}
  >
    <div
      id="embed-map-display" className="mt-5 py-4"
      style={{ height: "100%", width: "100%", maxWidth: "100%" }}
    >
      <iframe
        style={{ height: "100%", width: "100%", border: "0" }}
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=Lalitpur,+Nepal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe>
    </div>
  </div>
  )
}

export default Map