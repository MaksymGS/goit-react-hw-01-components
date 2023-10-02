import { Profile } from './Profile/Profile';
import user from 'data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';

console.log(friends);

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
    </>
  );
};
