
import React from 'react';

function TodoHeader({children,loading}) {
   //clone element serve para clonar un componente
   //React.Children.toArray serve para transformar un array de elementos en un array de componentes
    return (
        <header className="TodoHeader">
            { React.Children.toArray(children).map(
                child => React.cloneElement(child, { loading })
                )
            }
        </header>
    );
}
export {TodoHeader};