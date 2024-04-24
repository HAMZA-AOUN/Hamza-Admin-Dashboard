const Test = () => {
  const handleForm = async (formData) => {
    "use server";
    const username = formData.get("username");
    await console.log("Hello", username);
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>send</button>
      </form>
    </div>
  );
};

export default Test;
