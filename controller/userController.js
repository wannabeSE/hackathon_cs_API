const User = require('../model/userModel')

const login = async (req, res)=>{
    const {name, email, role, dp} = req.body
    let createdUser
    const count = await User.countDocuments()
    User.findOne({email}).exec((err,user)=>{
        if(user){
            res.send({msg:'user exists'})
        }else{
            if(count === 0 || dp === null){
                User.create({
                    name:name,
                    email:email,
                    role:'sysAdmin',
                    dp:'imageLink'
                })
                res.send(createdUser)
            }else{
                if(dp!=null){User.create({
                    name:name,
                    email:email,
                    dp:dp
                })}else{
                    User.create({
                        name:name,
                        email:email,
                        dp:'imageLink'
                    })
                }
                res.send(createdUser)
            }
            
        }
    })
}

const getUserInfo = async(req, res)=>{
    const {email} = req.params
    const userData = await User.findOne({email})
    res.json({userData})
} 

module.exports = { login, getUserInfo}