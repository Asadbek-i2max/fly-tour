const GoogleMap = () => {
  return (
    <div className="map-container" style={{ width: "100%", height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.175867063215!2d69.25697864021174!3d41.339572971861124!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzIyLjUiTiA2OcKwMTUnMjUuMSJF!5e0!3m2!1sen!2s!4v1728914770594!5m2!1sen!2s"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
