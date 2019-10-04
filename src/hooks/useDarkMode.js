import React, { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [style, setStyle] = useLocalStorage(key, initialValue)

    const body = document.querySelector("body");
    
    const styleChanges = useEffect(() => {
        if (style === true){
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [style])

    return [style, styleChanges, setStyle]
};
