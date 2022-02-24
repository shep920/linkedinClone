export class MessageModel{
  img: string;
  postText: string;
  name: string;

  constructor(img: string, postText:string, altImage: string, name:string ){
      this.img = img;
      this.postText = postText;
      this.name = name;
  }
}
