import { useState } from "react";
import Friends from "./Friends";
import Split from "./Split";
import "./styles.css";

const friends = [
  {
    id: 118836,
    name: "Clark",
    avatar: "https://i.pravatar.cc/48?u=118836",
    balance: -7
  },
  {
    id: 933372,
    name: "Sarah",
    avatar: "https://i.pravatar.cc/48?u=933372",
    balance: 20
  },
  {
    id: 499476,
    name: "Anthony",
    avatar: "https://i.pravatar.cc/48?u=499476",
    balance: 0
  }
];
export default function App() {
  const [Allfriends, setAllFriends] = useState(friends);
  const [curFriend, setCurFriend] = useState(null);
  const [addFriend, setAddFriend] = useState(false);
  const [billAmount, setBillAmount] = useState(null);
  const [yourExpence, setYourExpence] = useState(null);

  return (
    <div className="container">
      <Friends
        addFriend={addFriend}
        setAddFriend={setAddFriend}
        Allfriends={Allfriends}
        setAllFriends={setAllFriends}
        curFriend={curFriend}
        setCurFriend={setCurFriend}
      />
      {curFriend && !addFriend && (
        <Split
          curFriend={curFriend}
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          yourExpence={yourExpence}
          setYourExpence={setYourExpence}
          setAllFriends={setAllFriends}
          setCurFriend={setCurFriend}
        />
      )}
    </div>
  );
}
