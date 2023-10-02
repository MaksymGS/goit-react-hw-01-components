import { Profile } from './Profile/Profile';
import user from 'data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data/data.json';

console.log(data);

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
