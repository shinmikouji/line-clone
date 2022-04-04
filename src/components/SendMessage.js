import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessage({scroll}) {
  const [message, SetMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    SetMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            value={message}
            onChange={(e) => SetMessage(e.target.value)}
          />
        <SendIcon style={{color: "#7AC2FF", marginLeft: "20px"}}/>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
