

exports.create = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is portfolio create page"})
}
exports.read = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is portfolio read page"})
}

exports.delete = async (req,res)=>{
    await  res.status(200).json({status:"success",data:" this is portfolio deleted page"})
}
exports.update = async (req,res)=>  {
    await  res.status(200).json({status:"success",data:" this is portfolio update page"})
}
