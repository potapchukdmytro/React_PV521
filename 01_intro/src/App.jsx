import "./App.css";

function App() {
    const helloMessage = "Вітаємо в Україні✌️";
    // Повертатися має тільки один елемент (в ньому може бути скільки завгодно)
    // Для цього можна використовувати порожній елемент <></>
    return (
        <>
            <h1>Hello React!!!</h1>

            <h2>{helloMessage}</h2>

            <button className="custom-btn">Click me</button>

            <img width="200px" src="https://brainlab.com.ua/wp-content/uploads/2025/01/react-js2.jpg"/>
        </>
    );
}

export default App;