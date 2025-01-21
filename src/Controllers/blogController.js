

exports.create = async (req,res)=>{
   await res.status(200).json({status:"success",data:"This is blog create page"})
}
exports.read = async (req,res)=>{
    await res.status(200).json({status:"success",data:"This is blog read page"})
}

exports.delete = async (req,res)=>{
    await  res.status(200).json({status:"success",data:" this is blog deleted page"})
}
exports.update = async (req,res)=>  {
    await  res.status(200).json({status:"success",data:" this is blog update page"})
}
