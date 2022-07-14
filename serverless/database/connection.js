
const { Schema } = require ("mongoose")
const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://athul2ff:A9656athul@cluster0.kevh1nz.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true})
  .then(()=>{
    console.log("db connected successfully");
  })
  .catch((err)=>{
    console.log("db connection failed " + err );
  })


  const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    Collage: {
      type: String,
      required: true
    }
  })

const Student = new mongoose.model("Student", studentSchema)  

const insertData = async (data) =>{
  console.log("data  hear "+data);
  console.log(typeof(data));
  let name1 = data.name
  let collage =  data.collage
  try{
    const student1Data = new Student({
      name: name1,
      Collage:collage
    })
    const student2Data = new Student({
      name: name1,
      Collage:collage
    })
   
    
    const result =await Student.insertMany([student1Data,student2Data]) 
    return result;

    // console.log(`recorded data : ${result}`);
  }
  catch (err){
    console.log("Some Err while upload data" + err);
    return err;
  }
 
}

module.exports = {
  insertData
}
