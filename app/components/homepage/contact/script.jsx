import React from 'react';

function Script({ src }) {
  if (typeof window === 'undefined') return null; // Vérifier si le code s'exécute côté client

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.body.appendChild(script);

  return null;
}

export default Script;