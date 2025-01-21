

exports.create = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is product create page"})
}
exports.read = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is product read page"})
}

exports.delete = async (req,res)=>{
    await  res.status(200).json({status:"success",data:" this is product deleted page"})
}
exports.update = async (req,res)=>  {
    await  res.status(200).json({status:"success",data:" this is product update page"})
}
