const CroppedImage = (image: string) => {
    if (!image) return '';

    return image.replace("/media/", "/media/crop/600/400/");
};
//this is a function that takes in an image and returns a cropped image and make image uniform
export default CroppedImage;