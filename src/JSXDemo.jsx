import React from 'react';

function JSXDemo() {
  const elementJSX = <h2 className="titre">Bonjour JSX</h2>;

  // Version générée par Babel : JSX n'est que du sucre syntaxique
  const elementJS = React.createElement(
    'h2',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div>
      {elementJSX}
      {elementJS}

      <label htmlFor="champ">Entrez votre nom : </label>
      <input id="champ" />
    </div>
  );
}

export default JSXDemo;