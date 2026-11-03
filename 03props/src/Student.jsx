function Student(props){
    console.log("props", props);
    
    return(
        <>
        <h2>Name : {props.Name}</h2>
        <h2>Age : {props.Age}</h2>
        <h2>Course : {props.Course}</h2>
        </>
    )

}
export default Student;