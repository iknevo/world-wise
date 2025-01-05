function Message({ message }) {
  return (
    <p className="text-center w-80per my-8 mx-auto font-semibold text-[1.8rem]">
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
