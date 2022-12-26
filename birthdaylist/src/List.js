import React from "react";
 
const List = (props) => {          //function component ต้องใส่ props ในการเรียกใช้
  const {people} = props;
  console.log(people)             //ส่ง props มาและเรียกใช้ people แค่ค่าเดียว
//   return (
//     <div>
//       {
//         for(let i = 0; i<people.length: i++){
//           return(
//           <article className="person">
//          <img src ="" alt="profile image" />
//          <div>
//            <h4>Name</h4>
//            <p>29 years old</p>
//          </div>
//       </article>
//     </div>
//   );
// }

return (
  <div>
    {
      people.map((person)=>{
        const {id, name, age, image} = person;
        return(
          <article className="person">
          <img src ={image} alt="profile image" />
          <div>
            <h4>{name}</h4>
            <p>{age}years old</p>
          </div>
      </article>
        )
      })

    }
  </div>
)
}



export default List;
