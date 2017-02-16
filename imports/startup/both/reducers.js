



export function reducer_1(state={}, action){
	console.log("reducer_1 was called with state", state, 'and action', action);

		switch (action.type){
			case 'TEST_ACTION':
				return{
					...state,
					test: action.value
				}
			default:
				return state;


		}
}