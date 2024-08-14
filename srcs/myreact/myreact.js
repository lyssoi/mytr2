import { debounceFrame } from "./debounceFrame.js";


function MyReact () {
    const options = {
        currentStateKey : 0,
        renderCount: 0,
        states : [],
        root : null,
        rootComponent : null
    }
    function useState (initState) {
        const {currentStateKey : key, states} = options;
        if (states.length === key) states.push(initState);
        const state = states[key];
        const setState = (newState) => {
            states[key] = newState;
            _render();
        }
        options.currentStateKey += 1;
        return [state, setState];
    }
    const _render = debounceFrame(()=>{
        const {root, rootComponent} = options;
        if (!root || !rootComponent) return ;
        root.innerHTML = rootComponent();
        options.currentStateKey = 0;
        options.renderCount+=1;
    });
    function render (root, rootComponent) {
        options.root = root ;
        options.rootComponent = rootComponent;
        _render();
    }
  
    return { useState, render , _render };
}

// 어지러...
  
 export const { useState, render, _render } = MyReact();