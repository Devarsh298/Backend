import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
    video:{
        type:Schema.Types.ObjectId,
        ref:"video",
    },
    onwer:{
        type:Schema.Types.ObjectId,
        ref:"user",
    }
    
},
{
    timestamps:true,
}
)

commentSchema.plugin(mongooseAggregatePaginate);

export const commentModel = mongoose.model("Comment",commentSchema);

