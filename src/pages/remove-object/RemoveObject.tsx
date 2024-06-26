import imageBanner from "../../assets/banner-remove-obj.png";
import option2 from "../../assets/bokeh-step-2.png";
import option1 from "../../assets/remove-obj-option-1.png";
import option3 from "../../assets/remove-obj-option-3.png";
import option4 from "../../assets/remove-obj-option-4.png";
import step1 from "../../assets/remove-obj-step-1.png";
import step2 from "../../assets/remove-obj-step-2.png";
import step3 from "../../assets/remove-obj-step-3.png";
import step4 from "../../assets/step-final.png";
import DownloadMobilePhone from "../../components/DownloadMobilePhone";
import ListBackground from "../../components/ListBackground";
import OurFeature from "../../components/OurFeature";
import UploadImage from "../../components/UploadImage";

const RemoveObject = () => {
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
        imageBanner={imageBanner}
        optionsImage={[option1, option2, option3, option4]}
        title="Remove unexpected object or people from image"
        typeUpload="remove-object"
      />
      <ListBackground
        title="Steps to remove unexpected object."
        listSteps={listSteps}
      />
      <OurFeature />
      <DownloadMobilePhone />
    </div>
  );
};

export default RemoveObject;
