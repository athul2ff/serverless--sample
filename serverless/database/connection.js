
// const mongoose = require('mongoose')
//       mongoose.connect('mongodb+srv://athul2ff:A9656athul@cluster0.kevh1nz.mongodb.net/?retryWrites=true&w=majority')
//       .then((response)=>{
//         console.log("db connected ;;;;;;;",response);
//       }).catch((e)=>{
//         console.log("failed",e);
//       })


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
      default: "ABC"
    }
  })

const Student = new mongoose.model("Student", studentSchema)  

const insertData = async () =>{
  try{
    const student1Data = new Student({
      name: "athulP",
      collage:"univercity of calicut"
    })
    const student2Data = new Student({
      name:"abcdsssssssssss",
      collage:"zhss"
    })
    const student3Data = new Student({
      name:"avcdfkjk",
      collage:"sdjf"
    })

    const result = Student.insertMany([student1Data,student2Data,student3Data]) .catch((err)=>{
    console.log("not working while insert");
    })
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
