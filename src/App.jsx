import "./App.css";

import { AppProvider } from "./AppContext";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AppProvider>
                    <TodoForm />
                    <TodoList />
                </AppProvider>
            </main>
        </div>
    );
}

export default App;
