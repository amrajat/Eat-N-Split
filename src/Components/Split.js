import SplitForm from "./SplitForm";

export default function Split({
  curFriend,
  billAmount,
  setBillAmount,
  yourExpence,
  setYourExpence,
  setAllFriends,
  setCurFriend
}) {
  return (
    <div className="split">
      <h2>Split with {curFriend.name}</h2>
      <SplitForm
        curFriend={curFriend}
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        yourExpence={yourExpence}
        setYourExpence={setYourExpence}
        setAllFriends={setAllFriends}
        setCurFriend={setCurFriend}
      />
    </div>
  );
}
