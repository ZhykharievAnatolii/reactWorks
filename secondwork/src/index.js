import React from 'react';
import {createRoot} from "react-dom/client";
const root=createRoot(document.querySelector('#root'));

const component=(<header>
    Test
</header>)






root.render(
    <div>{component}
        Hello
    </div>
)