export const Buisinesscard = ({
  name,
  description,
  interests,
  social_media,
}) => {
  return (
    <>
      <div style={{ border: "1px solid black", width: "300px" }}>
        <h2>{name}</h2>
        <h5>{description}</h5>
        <p>Interests</p>
        {interests.map((interest) => (
          <div key={interest}>{interest}</div>
        ))}
        {social_media.map((social, index) => {
          return (
            <a key={index} href={social.url} target="_blank">
              <img
                src={social.image}
                alt="socialMediaImage"
                style={{ height: "30px", margin: "10px" }}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};
