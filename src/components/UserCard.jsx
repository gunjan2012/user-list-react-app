import React from "react";
import { Button, Image, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserCard = () => {
  const singleUser = useSelector((state) => state.singleUser);
  const userId = useSelector((state) => state.userId);
  const userProgress = { "--progress": singleUser.progress };
  return (
    userId && (
      <div className="user-detail-card">
        <div className="card-user-name">
          <Image
            className="rounded-circle"
            src={singleUser.img}
            alt="user-image"
          />
        </div>
        <div className="fw-bold mt-2 card-user-name">
          {singleUser.name}
          <span className="dot" />
        </div>
        <div className="text-muted my-1 card-user-name">{singleUser.email}</div>
        <div className="fw-bolder card-user-name">Your Plan : Standard</div>
        <div className="content-alignment mt-2">
          <Button
            variant="warning"
            className="text-light fw-bolder px-xs-4 px-sm-3 px-md-5 py-2"
          >
            Active User
          </Button>
        </div>
        <div className="fw-bolder fs-6 mt-4">Plan Uses</div>
        <div className="progress-background">
          <ProgressBar
            variant="warning"
            now={singleUser.progress}
            style={userProgress}
            //passing userProgress value from ProgressBar element to css file
            className="progress-bar"
          />
        </div>
        <div className="card-user-name mt-3">
          <div className="align-items-center">
            <div className="fw-bolder fs-3">{singleUser.clicksReviewed}</div>
            <div className="text-muted">Clicks reviewed</div>
          </div>
          <div className="ms-2 ms-sm-2 ms-md-3">
            <div className="verticle-line" />
          </div>
          <div className="ms-2 ms-sm-2 ms-md-3">
            <div className="fw-bolder fs-3">{singleUser.monthlyClicks}</div>
            <div className="text-muted">Monthly clicks</div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
