import React, { useEffect } from "react";

export default function withKeyboardFocus<P extends object>(Component: React.ComponentType<P>) {
  
  const ComponentWithName = (props: P) => {
    useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
        const isTab = e.key === 'Tab' || e.keyCode === 9;
        if(isTab) document.body.classList.add('kb-focus');
        else document.body.classList.remove('kb-focus');
      }
      const onPointerDown = () => {
        document.body.classList.remove('kb-focus');
      }
      addEventListener('keydown', onKeyDown);
      addEventListener('pointerdown', onPointerDown);
      addEventListener('mousedown', onPointerDown);
      return () => {
        removeEventListener('keydown', onKeyDown);
        removeEventListener('pointerdown', onPointerDown);
        removeEventListener('mousedown', onPointerDown);
      }
    }, []);
    return <Component {...props} />
  }

  ComponentWithName.displayName = Component.displayName || Component.name || 'Component';
  return ComponentWithName;
}
