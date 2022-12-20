const mongoose = require('mongoose')

const componentSchema = mongoose.Schema(
    {
        project_id:{
            type:String,
            
        },
        ececuting_agency:{
            type:String,

        },
        component_id:{
            type:String,
            unique : true
        },
        component_type:{
            type: String
        },
        depends_on:{
            type:String
        },
        budget_ratio:{
            type: Number
        }
},{
    timestamps:true
}
)
const Component = mongoose.model('Component', componentSchema)
module.exports = Component