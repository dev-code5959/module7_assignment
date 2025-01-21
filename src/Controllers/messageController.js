

exports.create = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is message create page"})
}
exports.read = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is message read page"})
}

exports.delete = async (req,res)=>{
    await  res.status(200).json({status:"success",data:" this is message deleted page"})
}
exports.update = async (req,res)=>  {
    await  res.status(200).json({status:"success",data:" this is message update page"})
}
