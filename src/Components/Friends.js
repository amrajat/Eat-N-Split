import Friend from "./Friend";
import AddFriend from "./AddFriend";
import Button from "./Button";

export default function Friends({
  addFriend,
  setCurFriend,
  curFriend,
  setAddFriend,
  Allfriends,
  setAllFriends
}) {
  let newFriendName;
  function handleAddFriend(e) {
    e.preventDefault();
    if (!newFriendName) return;
    const fid = crypto.randomUUID();

    const newFriend = {
      name: newFriendName,
      avatar: "https://i.pravatar.cc/48/?u=" + fid,
      id: fid,
      balance: 0
    };
    setAllFriends((Allfriends) => [...Allfriends, newFriend]);
    newFriendName = "";
    setAddFriend(false);
  }

  return (
    <ul className="friends">
      {Allfriends.map((friend) => (
        <Friend>
          <li className="friend" key={friend.id}>
            <img
              src={friend.avatar}
              alt={friend.name}
              className="friend__img"
            />
            <h4 className="friend__name">{friend.name}</h4>

            {friend.balance === 0 ? (
              <p className="friend__sumarry">{`Your and ${friend.name} are even.`}</p>
            ) : friend.balance < 0 ? (
              <p className="friend__sumarry red">{`You owe ${
                friend.name
              } $${Math.abs(friend.balance)}.`}</p>
            ) : (
              <p className="friend__sumarry green">{`${
                friend.name
              } owes you $${Math.abs(friend.balance)}.`}</p>
            )}

            <Button
              onClick={() =>
                setCurFriend((cur) => {
                  if (addFriend) setAddFriend(false);
                  return cur?.id === friend?.id ? null : friend;
                })
              }
            >
              {friend?.id === curFriend?.id ? "Close" : "Select"}
            </Button>
          </li>
        </Friend>
      ))}

      {addFriend && (
        <AddFriend>
          <form className="friend__form">
            <input
              type="text"
              placeholder="Enter Friend's Name"
              value={newFriendName}
              onChange={(e) => (newFriendName = e.target.value)}
            />
            <Button onClick={(e) => handleAddFriend(e)}>Add Friend</Button>
          </form>
        </AddFriend>
      )}

      <Button onClick={() => setAddFriend(!addFriend)}>
        {addFriend ? "Close" : "Add Friend"}
      </Button>
    </ul>
  );
}
