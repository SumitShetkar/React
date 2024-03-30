
{/* <div id="parent">
    <div id="child1">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
    <div id="child2">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
</div> */}



const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"parent"},"i am h1"),
React.createElement("h2",{id:"parent"},"i am h2")]));

// const heading = React.createElement("h1",
// {id:"abc"},
// "hello form react");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);