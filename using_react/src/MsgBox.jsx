// MsgBox.jsx code 

export default function MsgBox({userName,textColor}){
    let styles = {color: textColor};
    return (
        <h1 style={styles} className="msg">Hii, {userName}</h1>
    );
}