import React from "react";
import './appointment.scss';

import { useMemo, useCallback, useState, useEffect } from "react";
import { range, reduce } from "ramda";
import { createUser } from "./appointment.api";

const set = new Set();
export function Parent() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const expensiveCalculate = useMemo(() => {
        console.log("Excute expensive calculation");
        return reduce((acc, n) => acc + n, 0, range(0, 101));
    }, [count]);

    const memoCallback = useCallback(() => {
        console.log(count);
        return count;
    }, [value]);
    set.add(memoCallback);

    return (
        <>
            <h4>Parent: {count}-{expensiveCalculate}-{set.size}</h4>
            <Child callback={memoCallback} />
            <div>
                <button onClick={() => setCount(count + 1)}>>+c1</button>
                <input value={value} onChange={event => setValue(event.target.value)} />
            </div>
        </>
    );
}

function Child({callback}) {
    const [count, setCount] = useState(() => callback());

    function createNew() {
        createUser();
    }

    useEffect(() => {
        console.log('update child');
        setCount(callback());
    }, [callback]);

    return (
        <>
        <h4>Child: {count}</h4>
        <button onClick={createNew}>Create New One</button>
        </>
    );
}

export const Appointment: React.FC = () => (
    <div>
        <h1>Appoint.</h1>
        <Parent />
    </div>
);