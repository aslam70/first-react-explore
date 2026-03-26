// import './App.css'

export default function Singer({name}){
  // console.log(name)
  return(
    <div className='singer'>
      <h3>name:{name.name}</h3>
      <p>age:{name.age}</p>
    </div>
  )
}