import Student from "./Student"

function App(){
  
  
  let MyObj = {
    Fruit : "Mango",
    Vegies : "Potato"
  }
  let newArr = [1, 2, 3]
  return(
    <div>

    <Student someObj = {MyObj} />
    <Student Arr = {newArr} />
    

    <Student 
    Name = "Bhoomi"
    Age = {21}
    Course = "CS"
    />
    <Student 
    Name = "Harshita"
    Age = {23}
    Course = "CSE"
    />

    </div>
  )
}
export default App;