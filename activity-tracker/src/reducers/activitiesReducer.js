import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: 1,
    name: "running",
    duration: "1 hour",
  },
];

const activitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_ACTIVITY":
      return [...state,
        {
          id: uuidv4(),
          name: payload.name,
          duration: payload.duration,
        },
      ];
    case "DELETE_ACTIVITY":
      const copyState = [...state]; //การโคลน
      // //find in of object to
      // const i = copyState.findIndex(
      //   (x)=>x.id === payload.id
      //   );
      // copyState.splice(i, 1);
      // return [...copyState];
      return copyState.filter((activity) => activity.id !== payload.id);
    default:
      return state;
  }
};

export default activitiesReducer;
