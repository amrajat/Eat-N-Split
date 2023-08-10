import { useState } from "react";

export default function SplitForm({
  curFriend,
  billAmount,
  setBillAmount,
  yourExpence,
  setYourExpence,
  setAllFriends,
  setCurFriend
}) {
  // Need to make yourExpence local state within this component.
  const remainingBalance = billAmount - yourExpence;
  const [whoPaying, setWhoPaying] = useState("user");
  const offSetBalance =
    whoPaying === "user" ? remainingBalance : -remainingBalance;
  function handleSubmit(e) {
    e.preventDefault();
    if (!billAmount || !yourExpence) return;
    if (!curFriend) return;
    setAllFriends((friends) =>
      friends.map((friend) =>
        friend.id === curFriend.id
          ? { ...friend, balance: friend.balance + offSetBalance }
          : friend
      )
    );

    setCurFriend(null);
    setYourExpence(null);
    setBillAmount(null);
  }
  return (
    <form className="split__form" onSubmit={(e) => handleSubmit(e)}>
      <label>Bill Amount?</label>
      <input
        type="number"
        placeholder="enter bill amount"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />

      <label>Your Expence</label>
      <input
        type="number"
        value={yourExpence}
        placeholder="enter your expence"
        onChange={(e) => setYourExpence(Number(e.target.value))}
      />

      <label>{curFriend.name}'s Expence</label>
      <input
        type="number"
        value={billAmount - yourExpence}
        placeholder="enter bill amount"
        disabled
      />

      <label>Who's paying the bill?</label>
      <select value={whoPaying} onChange={(e) => setWhoPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{curFriend.name}</option>
      </select>
      <button type="submit">Split Bill</button>
    </form>
  );
}
