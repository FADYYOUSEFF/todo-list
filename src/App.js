import "./App.css";
import ToDo from "./Component/ToDo.js";
import { TodosProvider } from "./Context/TodosContext.js";
function App() {
  return (
    <div className="App">
      <TodosProvider>
        <ToDo />
      </TodosProvider>
    </div>
  );
}

export default App;
