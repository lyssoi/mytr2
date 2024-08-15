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
            if (Object.is(states[key], newState)) {
                return ;
            }
            states[key] = newState;
            _render();
        }
        options.currentStateKey += 1;
        return [state, setState];
    }
    function useEffect (callback, dependencies) {
        const {currentStateKey : key, states} = options;
        const oldDependencies = states[key];

        let isChanged = true;
        
        if (oldDependencies) {
            isChanged = dependencies.some(
                (dep, i) => !Object.is(dep, oldDependencies[i])
            );
        }
        if (isChanged) {
            callback();
            states[key] = dependencies;
        }
        options.currentStateKey += 1;
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
  
 export const { useState, render, _render } = MyReact();