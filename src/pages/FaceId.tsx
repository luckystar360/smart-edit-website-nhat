import banner from "../assets/banner-face-id.png";
import step1 from "../assets/face-id-step-1.png";
import step2 from "../assets/face-id-step-2.png";
import step3 from "../assets/face-id-step-3.png";
import img1 from "../assets/remove-bg-option-1.png";
import img2 from "../assets/remove-bg-option-2.png";
import img3 from "../assets/remove-bg-option-3.png";
import img4 from "../assets/remove-bg-option-4.png";
import step4 from "../assets/step-final.png";
import DownloadMobilePhone from "../components/DownloadMobilePhone";
import ListBackground from "../components/ListBackground";
import ListFeature from "../components/ListFeature";
import UploadImage from "../components/UploadImage";

const FaceId = () => {
  const listSteps = [
    {
      image: step1,
      title: "Upload your image (file types are PNG or JPG)",
    },
    {
      image: step2,
      title: "All object inside the image will be highlighted to choose.",
    },
    {
      image: step3,
      title: "Delete the selected objects.",
    },
    {
      image: step4,
      title: "After all, you can download your result image.",
    },
  ];
  return (
    <div>
      <UploadImage
        imageBanner={banner}
        optionsImage={[img1, img2, img3, img4]}
        title="Edit your photo to make face ID photo"
        typeUpload="face-id"
      />
      <ListBackground title="Steps to make ID photo." listSteps={listSteps} />
      <ListFeature />
      <DownloadMobilePhone />
    </div>
  );
};

export default FaceId;