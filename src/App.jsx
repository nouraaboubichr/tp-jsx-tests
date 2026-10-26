import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';

function App() {
  return (
    <div className="App">
      <h1>TP JSX et Composition</h1>

      <h2>JSX et JavaScript pur</h2>
      <JSXDemo />

      <h2>Higher-Order Component</h2>
      <ButtonWithLogging label="Cliquer ici" />

      <h2>Render Props</h2>
      <DataLoader
        render={(data) => (
          <ul>
            {data.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;