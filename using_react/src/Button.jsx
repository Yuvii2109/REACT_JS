// Button.jsx code 

function printHii(){
    console.log("Hii");
}  

export default function Button(){
    return(
        <div>
            <p onMouseOver = {printHii}>Click me!</p>
        </div>
    );
}