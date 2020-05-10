const initialState = {
    profileData: [],
    isLoading: true,
};

export default function profileReducer(profileState = initialState, action) {
    switch (action.type) {
        case "LOADING_PROFILE":
            return {
                ...profileState,
                isLoading: true
            }
        case "GET_PROFILE":
            return {
                ...profileState,
                profileData: action.payload,
                isLoading: false
            }
        default:
            return profileState
    }
}