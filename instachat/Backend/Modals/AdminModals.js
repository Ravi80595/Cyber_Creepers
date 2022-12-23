import { Schema,model,models} from "mongoose"

const adminSchema = new Schema({
    // email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    firstname:{type:String,require:true},
    lastname:String,
    role:{type:String,default:"admin",defaul:'Developer'},
    avtar:{type:String,default:"https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="},
})

const AdminModel = models.admens || model("admens",adminSchema)

export default AdminModel