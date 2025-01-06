const Contact = () => {
  return (
    <div className="p-4 m-4">
      <h1>Contact us</h1>
      <input
        className="border-b-violet-200 p-1 m-1"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="border-b-violet-200  p-1 m-1"
        type="email"
        placeholder="Enter your email"
      />
      <button>Submit</button>
    </div>
  );
};

export default Contact;
