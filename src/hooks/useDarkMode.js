import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [style, setStyle] = useLocalStorage(key, initialValue)

    
}