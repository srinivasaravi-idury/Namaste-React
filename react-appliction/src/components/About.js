import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <User name="Ravi" location="Hyderabad" />
      <UserClass name="Ravi-class" location="Hyderabad" />
    </div>
  );
};

export default About;
