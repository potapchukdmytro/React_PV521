import "./Counter.css";
import { use, useState } from "react";

// Хуки (hooks) - функії які надають доступ до певного функціоналу React проекту
// 1. Всі хуки це функції
// 2. Починаються на use
// 3. Хук повинен викликатися в компоненті

function Counter() {
    console.log("Counter render");

    // useState - хук для керування станом компоненту
    // Повертає стан та функцію для його зміни
    // Якщо стан змінюється то викликається ререндер компоненту
    const [count, setCount] = useState(0);

    function increment() {
        const newCount = count + 1;
        setCount(newCount);
        console.log(newCount);
    }

    function decrement() {
        const newCount = count - 1;
        setCount(newCount);
        console.log(newCount);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className="counter-btn">+</button>
            <button onClick={decrement} className="counter-btn">-</button>
        </div>
    );
}

export default Counter;
