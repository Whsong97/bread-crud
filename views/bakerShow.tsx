import React from 'react';
import Default from './layouts/default';

interface Baker {
  id: string;
  name: string;
  startDate: Date;
  bio: string;
  breads: Bread[];
}

interface Bread {
  id: string;
  name: string;
}

interface ShowProps {
  baker: Baker;
}

function Show({ baker }: ShowProps): JSX.Element {
  return (
    <Default>
      <h3>{baker.name}</h3>
      <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
      <p>About {baker.name}: {baker.bio}</p>
      <h3>Breads {baker.name} has baked</h3>
      {
        baker.breads.map(bread => {
          return (
            <li key={bread.id}>{bread.name}</li>
          );
        })
      }
      <form action={`/bakers/${baker.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Default>
  );
}

export default Show;
