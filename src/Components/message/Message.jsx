import "./message.css";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src=""
          alt=""
        />
        <p className="messageText">This is a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}