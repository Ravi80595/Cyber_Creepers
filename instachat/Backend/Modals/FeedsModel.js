import { Schema,model,models} from "mongoose"
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateFormat"

const GetCurrentDateval=GetCurrentDate()
const GetCurrentTimeval=GetCurrentTime()

const FeedsSchema=new Schema({
title:{type:String,required:true},
imagepath:{type:String,required:true},
description:{type:String,required:true},
tags:[String],
user_id:{type:String,required:true},
postCreatedDate:{type:String,default:GetCurrentDateval},
postCreatedTime:{type:String,default:GetCurrentTimeval},

})
const FeedsModel=models.Feeds || model("Feeds",FeedsSchema)

export default FeedsModel