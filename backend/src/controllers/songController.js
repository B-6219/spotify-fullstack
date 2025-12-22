//import { v2 as cloudinary } from 'cloudinary'
import songModel from '../models/songModel.js'
import cloudinary from '../config/cloudinary.js'

const addSong = async (req,res) => {
   try {
      const name = req.body.name
      const desc = req.body.desc
      const album = req.body.album
      const audioFile = req.files.audio[0]
      const imgeFile = req.files.image[0]
      const audioUpload = await cloudinary.uploader.upload(audioFile.path,{resource_type:"video"})
      const imageUpload = await cloudinary.uploader.upload(imgeFile.path, {resource_type:'image'})
      const duration = `${Math.floor(audioUpload.duration / 60)} ${Math.floor(audioUpload.duration % 60)}: `
      console.log(name,desc,album,audioUpload,imageUpload);

      const songData = {
         name,desc,album,
         image:imageUpload.secure_url,
         file:audioUpload.secure_url,
         duration
      }
      const song = songModel(songData)
      await song.save()

      res.json({sucess:true ,  message:'Song Added'})
      
   } catch (error){
      console.log("Jello");
      
   }
}

const listSong = async (req,res) => {

}

export  {addSong , listSong }