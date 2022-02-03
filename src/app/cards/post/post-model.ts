export class PostModel{
  img: string;
  postText: string;
  altImage: string;
  name: string;

  constructor(img: string, postText:string, altImage: string, name:string ){
      this.img = img;
      this.postText = postText;
      this.altImage = altImage;
      this.name = name;
  }
}
