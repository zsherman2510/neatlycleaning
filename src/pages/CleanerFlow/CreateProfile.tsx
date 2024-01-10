import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfilePicture } from "../../redux/reducers/cleanerReducer";
const CreateProfile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!profileImage) {
      alert("Please select a profile picture and enter your bio.");
      return;
    }

    dispatch(updateProfilePicture(profileImage));
    navigate("/cleanerCreds");
  };

  return (
    <div className="container">
      <div className="care-question">Create your profile</div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="profileImage">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            id="profileImage"
            onChange={handleImageChange}
          />
          {previewImage && (
            <img src={previewImage} alt="Profile Preview" className="preview" />
          )}
        </div>
        <button className="care-next" type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
