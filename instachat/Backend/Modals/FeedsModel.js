import { Schema,model,models} from "mongoose"

const FeedsSchema=new Schema({
        "id": String,
        "username": String,
        "post": String,
        "like": String,
        "Avatar": String
     
})
const FeedsModel=models.Feeds || model("Feeds",FeedsSchema)

export default FeedsModel