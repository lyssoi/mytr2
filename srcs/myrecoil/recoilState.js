import { useEffect, useState } from "../myreact/myreact.js";
import Atom from "./atom.js";

function useRecoilValue(atom) {
    const [state, setState] = useState(atom.get());
    useEffect(()=>{
        const unsubscribe = atom.subscribe(setState);
        return () => unsubscribe();
    },[atom]);

    return state;
}

function useSetRcoilState(atom) {
    const setRecoilState = (newValue) => {
        atom.set(newValue);
    }
    return setRecoilState;
}

function useRecoilStaete(atom) {
    const state = useRecoilValue(atom);
    const setRecoilState = useSetRcoilState(atom);
    return [state, setRecoilState];
}

export {useRecoilValue, useRecoilStaete, useSetRcoilState};