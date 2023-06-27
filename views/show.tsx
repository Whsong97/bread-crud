import React from 'react';
import Default from './layouts/default';

interface Bread {
  id: string;
  name: string;
  hasGluten: boolean;
  getBakedBy: () => string;
  image: string;
}

interface ShowProps {
  bread: Bread;
}

function Show({ bread }: ShowProps): JSX.Element {
  return (
    <Default>
      <h2>Show Page</h2>
      <h3>{bread.name}</h3>
      <p>
        and it{' '}
        {bread.hasGluten ? <span>does</span> : <span>does not</span>} have
        gluten
      </p>
      <p>{bread.getBakedBy()}</p>
      <img src={bread.image} alt={bread.name} />
      <a href={`/breads/${bread.id}/edit`}>
        <button>Edit</button>
      </a>
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Default>
  );
}

export default Show;
