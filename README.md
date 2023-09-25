# Shirt Cart

This is an experimental React application aimed at confirming whether query parameters alone can serve the purpose of state and retain values after page refresh. 
useState() cannot retain values after refreshing the component, and it cannot update query parameters on its own. Here, you can see that React Router v6 provides a hook that can perform both the updating and retrieval of query parameters. 

| The following code can help you understand the usage of query parameters without relying on useState() |
|----------------------------------------------|

```
import { useSearchParams } from "react-router-dom";
const [searchParams, setSearchParams] = useSearchParams();
```
The useSearchParams() hook provides two methods that can be used to retrieve and update query parameters.

```
const selectedSize = searchParams.get("size")|| "Small";
const selectedColor = searchParams.get("color")||'red';
```
The 'get('key')" method provides access to the parameters object, OR is added for handling initial state.

```
<button
    onClick={() => setSearchParams({ size, color: selectedColor })} />
```
setSearchParams() is used to update the query parameters. The parameters are properties of the object that need to be passed into the function

