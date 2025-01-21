

exports.create = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is comment create page"})
}
exports.read = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is comment read page"})
}

exports.delete = async (req,res)=>{
    await  res.status(200).json({status:"success",data:" this is comment deleted page"})
}
exports.update = async (req,res)=>  {
    await  res.status(200).json({status:"success",data:" this is comment update page"})
}
