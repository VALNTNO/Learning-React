import "./App.css";
import { TwitterFollowCard } from "./twitter-follow-card";

const users = [
  {
    userName: "valntno",
    name: "Valentino Cogo",
    isFollowing: true,
    imageUrl:
      "https://images.freeimages.com/images/large-previews/56f/butterfly-on-daisy-1560505.jpg",
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
    imageUrl:
      "https://images.freeimages.com/images/large-previews/543/under-the-sea-1248143.jpg",
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
    imageUrl:
      "https://images.freeimages.com/images/large-previews/44c/blue-and-yellow-macaw-1641749.jpg",
  },
  {
    userName: "fefeco",
    name: "Federico Cogo",
    isFollowing: false,
    imageUrl:
      "https://images.freeimages.com/images/large-previews/d41/bear-combat-2-1332988.jpg",
  },
];

export function App() {
  //
  const addAt = (userName) => `@${userName}`;
  //

  return (
    <section className="meet-people">
      {users.map(({ userName, name, isFollowing, imageUrl }) => (
        <TwitterFollowCard
          userName={userName}
          initialIsFollowing={isFollowing}
          formateUserName={addAt}
          key={userName}
          imageUrl={imageUrl}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
