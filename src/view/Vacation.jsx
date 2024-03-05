const vacation = ({availble}) => {
    console.log(availble)
    if(availble === true){
        return <h1>"go vacation"</h1>
    } else {
        return <h1>"too busy"</h1>
    }
}

export default vacation